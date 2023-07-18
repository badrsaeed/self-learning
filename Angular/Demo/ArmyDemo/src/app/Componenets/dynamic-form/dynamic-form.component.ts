import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  schoolForm!:FormGroup;

  constructor(private fb:FormBuilder){
    this.schoolForm =  this.creatDynamicForm('init');
  }

  getClassRooms(){
  return this.schoolForm.get('classRooms') as FormArray;
  }

  getSubjects(classRoomIndex:number){
    console.log(this.getClassRooms());

    return this.getClassRooms().
    at(classRoomIndex).get('subjects') as FormArray;
  }

  addClassRoom(){
    console.log('class Room added');

    this.getClassRooms().push(this.creatDynamicForm('classRooms'));
  }

  addSubject(currentIndex:number){
    console.log(this.getSubjects(currentIndex));

    this.getSubjects(currentIndex)?.push(this.creatDynamicForm('subjects'));
  }

  deleteClassRoom(classRoomIndex:number){
    this.getClassRooms().removeAt(classRoomIndex);
  }

  deleteSubject(index:number){
    // this.getSubjects().removeAt(index);
  }

  creatDynamicForm(createItem:string):FormGroup{
    let returnedForm!:FormGroup;
    switch(createItem){
      case 'init':
        returnedForm = this.fb.group({
          schoolName:'',
          studentsCount:'',
          classRooms:this.fb.array([])
        });
        break;
        case 'classRooms':
          returnedForm = this.fb.group({
            classRoomName:'',
            studentsRoomCount:'',
            subjects:this.fb.array([])
          });
          break;
        case 'subjects':
          returnedForm = this.fb.group({
            subjectName:'',
            studentsCount:'',
          });
          break;
    }
    return returnedForm;
  }
}
