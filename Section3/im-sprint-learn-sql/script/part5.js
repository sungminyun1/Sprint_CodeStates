// 유어클래스의 requirement를 참조하여, .schema.sql에 추가로 구성해주세요.

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-1. category 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 category 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_1 = `desc category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-2. content_category 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 content_category 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_2 = `desc content_category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-3. role 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 role 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_3 = `desc role`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-4. user 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 user 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_4 = `desc user`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-1. category 테이블에 존재하는 데이터에서 id, name을 찾는 SQL을 작성해주세요.
*/

const PART5_2_1 = `select id, name from category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-2. user의 name과 email 그리고 그 user가 속한 role name(컬럼명: roleName)을 찾기 위한 SQL을 작성해주세요.
        - 속한 role이 없더라도, user의 name과 email,role name을 모두 찾아야합니다.
*/
const PART5_2_2 = `select user.name, user.email, role.name as roleName from user left join role on user.roleId = role.id`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-3. 어느 role에도 속하지 않는 user의 모든 컬럼 데이터를 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_3 = `select * from user where roleId is null`;

/*
----------------------------------------------------------------------------------------------
    TODO: content_category 테이블의 의미를 테이블 관계로서 이해하고 있는지 점검해주세요. 질문자체가 이해가 안된다면, Help-Desk에 질문해주세요.
----------------------------------------------------------------------------------------------    
*/
// content 테이블과 category 테이블 간의 다대다 관계를 이어주기 위한 join table 이다.
/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-4. content_category 테이블에 존재하는 모든 칼럼의 데이터를 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_4 = `select * from content_category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-5. jiSungPark이 작성한 content의 title을 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_5 = `select content.title from content join user on content.userId = user.id where user.name = 'jiSungPark'`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-6. JiSungPark이 작성한 content의 category name을 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_6 = `select category.name 
from category
join content_category on category.id = content_category.categoryId
join content on content_category.contentId = content.id
join user on content.userId = user.id
where user.name = 'JiSungPark'`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-7. category의 name이 soccer인 content의 title, body, created_at을 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_7 = `select content.title, content.body, content.created_at
from content
join content_category on content.id = content_category.contentId
join category on content_category.categoryId = category.id
where category.name = 'soccer'`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-8. category의 name이 soccer인 content의 title, body, created_at, user의 name을 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_8 = `select content.title, content.body, content.created_at, user.name
from user
join content on user.id = content.userId
join content_category on content.id = content_category.contentId
join category on content_category.categoryId = category.id
where category.name = 'soccer'`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-9. duRiCha가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
*/
const PART5_2_9 = `select count(title) as ContentCount
from content
join user on content.userId = user.id
where user.name = 'duRiCha'`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-10. 각 user(컬럼명: name)가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
*/
const PART5_2_10 = `select user.name as name, count(title) as ContentCount
from user
left join content on content.userId = user.id
group by user.name`;

module.exports = {
  PART5_1_1,
  PART5_1_2,
  PART5_1_3,
  PART5_1_4,
  PART5_2_1,
  PART5_2_2,
  PART5_2_3,
  PART5_2_4,
  PART5_2_5,
  PART5_2_6,
  PART5_2_7,
  PART5_2_8,
  PART5_2_9,
  PART5_2_10,
};
