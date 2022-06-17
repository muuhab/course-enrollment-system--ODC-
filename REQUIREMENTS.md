## Data Shapes
#### Student
- id 
- student_name
- username
- email
- password student_phone
- student_address
- college
- image
- create_at
Table odc_students: (id:number, student_name:string, username:string, email:string, password:string, student_phone:string, student_address:string, college:string, image:string, create_at:timestamp)
#### Category
- id
- category_name
- created_at
Table odc_categories: (id:number, category_name:string, created_at:timestamp)
#### Course
- id
- course_name
- course_level
- created_at
- category_id

Table odc_courses: (id:number, course_name:string, course_level:number, created_at:timestamp, category_id:number[foreign key to odc_categories table])
#### Exam
- id
- course_id
- create_at

Table odc_exams: (id:number, course_id:number[foreign key to odc_courses table],created_at:timestamp)
#### Revision
- id
- student_degree
- total_right_degree
- total_wrong_degree
- create_at
- exam_id
- student_id

Table odc_revision: (id:number,student_degree:number,total_right_degree:number,total_wrong_degree:number,create_at:timestamp,exam_id:number[foreign key to odc_exams table],student_id:number[foreign key to odc_students table])
#### Question
- id
- question_content
- question_answer
- exam_id

Table odc_questions: (id:number,question_content:string,question_answer:string,exam_id:number[foreign key to odc_exams table])
#### Trainer
- id
- name
- created_at

Table odc_trainers: (id:number,name:string,created_at:timestamp)
#### Teaching
- id
- course_id
- trainer_id

Table odc_teaching: (id:number,course_id:number[foreign key to odc_courses table],trainer_id:number[foreign key to odc_trainers table])
#### Enroll
- id
- student_id
- course_id
- status
- code
- code_time
- expire_after
- created_at

Table odc_enroll: (id:number,student_id:number[foreign key to odc_students table],course_id:number[foreign key to odc_courses table],status:string,code:string,code_time:timestamp,expire_after:string,created_at:timestamp)
#### Admin
- id
- role
- username
- email
- password
- image

Table odc_admins: (id:number,role:string,username:string,email:string,password:string,image:string,create_at:timestamp)
