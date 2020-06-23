# Django Self Study

```python
    from django.conf import settings
```
- from or import로 시작하는 부분은 다른 파일에 있는 것을 추가하라는 의미
   - 매번 다른 파일에 있는 것을 복사 & 붙여넣기로 해야 하는 작업을 from이 대신 불러와 주는 것 

```python
    class Post(models.Model)
```
- 모델을 정의하는 코드 
- class : 특별한 키워드, 객체를 정의한다는 것을 알려줌 
- Post : 모델의 이름, 클래스 이름의 첫 글자는 대문자로 작성해야 함 
- models : Post가 장고 모델임을 의미 
    - 이 부분 덕분에 장고는 Post가 DB에 저장되어야 한다고 알게 됨 

- 속성을 정의하는 것
    - 필드마다 어떤 종류의 데이터 타입을 가지는지를 정해야 함 
    - 여기서 데이터 타입에는 텍스트, 숫자, 날짜, 사용자 처럼 다른 객체 참조가 존재 
    - models.CharField : 글자 수가 제한된 텍스트를 정의할 때 사용 
    - models.TextField : 글자 수에 제한이 없는 긴 텍스트를 위한 속성 
    - models.DateTimeField : 날짜와 time을 의미 
    - models.ForeignKey : 다른 모델에 대한 링크를 의미  

- def publish(self) : publish 라는 메서드 
    - def : 함수, 메서드라는 의미 

- 메서드는 자주 무언가를 되돌려줌 
    - __str__ 메서드를 보면, 호출하면 Post 모델의 제목 텍스트를 얻게 됨 

# Django 모델 

- 어플리케이션 => 블로그 글 모델 제작 => 데이터베이스에 모델을 위한 테이블 제작

- Django는 데이터베이스에 지금 반영할 수 있도록 마이그레이션 파일이라는 것을 준비해 둠 
```shell
    python manage.py migrate blog
```
- 실제 데이터베이스에 모델 추가를 반영 => 글 모델이 데이터베이스에 저장됨 
`