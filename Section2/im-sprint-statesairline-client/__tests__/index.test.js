import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, fireEvent, render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { act } from 'react-dom/test-utils'

import "@testing-library/jest-dom/extend-expect";
import Search from "../pages/component/Search";
import Main from "../pages/Main"
import { resq$ } from 'resq'
import * as Api from '../api/FlightDataApi'
import nock from 'nock'
import { readFileSync } from 'fs'

console.error = (msg) => {
  if (msg.toString().includes('Warning: An update to Main inside a test was not wrapped in act')) {
    return () => { }
  }
  else return console.error
}

describe('π‘ Part 1: ν­κ³΅κΆ λͺ©λ‘ νν°λ§', () => {
  describe('π§© Main μ»΄ν¬λνΈμμ ν­κ³΅νΈμ μ‘°νν©λλ€', () => {
    const container = document.createElement('div')

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container)
      cleanup()
    })

    test('Main μ»΄ν¬λνΈ λ΄ `search` ν¨μλ κ²μ μ‘°κ±΄μ λ΄κ³  μλ μν κ°μ²΄ `condition`μ μλ°μ΄νΈν΄μΌ ν©λλ€', () => {
      const { getByTestId } = render(<Main />, { container })
      act(() => {
        global.search({ departure: "ICN", destination: "CJU" })
      })

      const element = getByTestId('condition')
      expect(element.textContent).toBe('{"departure":"ICN","destination":"CJU"}')
    })
  })


  describe('π§© Search μ»΄ν¬λνΈλ₯Ό ν΅ν΄ μν λμ΄μ¬λ¦¬κΈ°λ₯Ό νμ΅ν©λλ€', () => {
    const container = document.createElement('div')

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container)
    })

    test("κ²μ νλ©΄μ΄ Search μ»΄ν¬λνΈλ‘ λΆλ¦¬λμ΄μΌ ν©λλ€", () => {
      render(<Search />, { container })
      expect(container.querySelector('#input-departure')).not.toBeNull()
      expect(container.querySelector('#input-destination')).not.toBeNull()
      expect(container.querySelector('#search-btn')).not.toBeNull()
    });

    test("Search μ»΄ν¬λνΈμλ μν λ³κ²½ ν¨μ `search`κ° `onSearch` propsλ‘ μ λ¬λμ΄μΌ ν©λλ€", () => {
      render(<Main />, { container })
      const onSearch = resq$('Search', container).props.onSearch

      expect(typeof onSearch).toBe('function')
      expect(onSearch.name).toBe('search')
    });

    test("μν λ³κ²½ ν¨μ `search`λ Search μ»΄ν¬λνΈμ `κ²μ` λ²νΌ ν΄λ¦­ μ μ€νλμ΄μΌ ν©λλ€", () => {
      const searchFn = jest.fn()
      const { getByRole } = render(<Search onSearch={searchFn} />, { container })
      const btn = getByRole('button', { name: 'κ²μ' })
      fireEvent.click(btn)

      expect(searchFn).toHaveBeenCalled()
    });
  })
})

describe('π‘ Part 2: AJAX μμ²­', () => {

  describe('π§© Side Effectλ useEffectμμ λ€λ€μΌ ν©λλ€', () => {
    const container = document.createElement('div')

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container)
    })

    test('κ²μ μ‘°κ±΄μ΄ λ°λ λλ§λ€, FlightDataApiμ getFlightλ₯Ό κ²μ μ‘°κ±΄κ³Ό ν¨κ» μμ²­ν΄μΌ ν©λλ€', (done) => {
      const getFlightSpy = jest.spyOn(Api, 'getFlight')

      const { getByRole } = render(<Main />, { container })
      const btn = getByRole('button', { name: 'κ²μ' })
      const input = container.querySelector('#input-destination')

      fireEvent.change(input, { target: { value: 'CJU' } })
      fireEvent.click(btn)

      waitFor(() => {
        expect(getFlightSpy).toHaveBeenCalled()
        done()
      })
    })

    test('getFlightμ κ²°κ³Όλ₯Ό λ°μ, flightList μνλ₯Ό μλ°μ΄νΈν΄μΌ ν©λλ€', async () => {
      const { getByRole, queryAllByText, queryByText } = render(<Main />, { container })
      const btn = getByRole('button', { name: 'κ²μ' })
      const input = container.querySelector('#input-destination')

      fireEvent.change(input, { target: { value: 'CJU' } })
      fireEvent.click(btn)

      await waitFor(() => {
        expect(queryAllByText('π¬ CJU').length).toBe(5) // λμ°©μ§κ° CJUμ΄λ©΄, κ²°κ³Όκ° λ€μ―κ°μλλ€

        // λ€λ₯Έ λμ°©μ§λ νλ©΄μ νμλμ§ μμ΅λλ€
        expect(queryAllByText('π¬ BKK').length).toBe(0)
        expect(queryAllByText('π¬ PUS').length).toBe(0)
      })
    })

    test('λμ΄μ, μ»΄ν¬λνΈ λ΄ νν° ν¨μ `filterByCondition`λ₯Ό μ¬μ©νμ§ μμ΅λλ€', () => {
      // HINT: μ£Όμ μ²λ¦¬νμ§ λ§κ³ , ν΄λΉ λ΄μ©μ μ§μμΌ νμ€νΈμ ν΅κ³Όν©λλ€
      expect(Main.toString().includes('filterByCondition')).toBe(false)
    })

    test('λμ΄μ, νλμ½λ©λ flightList JSONμ μ¬μ©νμ§ μμ΅λλ€ (μ΄κΈ°κ°μ λΉ λ°°μ΄λ‘ λ‘λλ€)', () => {
      // HINT: μ£Όμ μ²λ¦¬νμ§ λ§κ³ , ν΄λΉ λ΄μ©μ μ§μμΌ νμ€νΈμ ν΅κ³Όν©λλ€
      const file = readFileSync(__dirname + '/../pages/index.js').toString()
      expect(file.includes("import json from '../resource/flightList'")).toBe(false)
    })

    test('getFlight μμ²­μ΄ λ€μ λλ¦¬λ―λ‘, λ‘λ© μνμ λ°λΌ LoadingIndicator μ»΄ν¬λνΈλ₯Ό νμν΄μΌ ν©λλ€', async () => {
      const { getByRole, getByAltText } = render(<Main />, { container })
      const btn = getByRole('button', { name: 'κ²μ' })
      const input = container.querySelector('#input-destination')

      fireEvent.change(input, { target: { value: 'CJU' } })
      fireEvent.click(btn)

      expect(getByAltText('now loading...')).not.toBeNull()
      await waitForElementToBeRemoved(() => getByAltText('now loading...'))
    })
  })

  describe('π§© FlightDataApiμμ κΈ°μ‘΄ κ΅¬ν λμ , REST APIλ₯Ό νΈμΆνλλ‘ λ°κΏλλ€', () => {

    test('κ²μ μ‘°κ±΄κ³Ό ν¨κ» StatesAirline μλ²μμ ν­κ³΅νΈ μ λ³΄λ₯Ό μμ²­(fetch)ν©λλ€', (done) => {
      const result = [{
        uuid: 'af6fa55c-da65-47dd-af23-578fdba40bod',
        departure: 'ICN',
        destination: 'CJU',
        departure_times: '2021-12-02T12:00:00',
        arrival_times: '2021-12-03T12:00:00'
      }]

      const scope = nock("http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81")
        .persist()
        .get("/flight?departure=ICN&destination=CJU")
        .reply(200, result)

      Api.getFlight({ departure: 'ICN', destination: 'CJU' })
        .then((json) => {
          expect(json).toEqual(result)
          const ajaxCallCount = scope.interceptors[0].interceptionCounter;
          expect(ajaxCallCount).toEqual(1); // ajax callμ΄ 1ν λ°μ
          expect(scope.interceptors[0].statusCode).toEqual(200);
          done()
        })


    })
  })
})