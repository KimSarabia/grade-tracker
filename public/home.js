'use strict';


$(()=>{

  $('.newGrade').click(openNewGradeModal);
  $('.removeGrade').click(deleteGrade);
  $('form.newGradeForm').submit(createNewGrade);
});

function createNewGrade(e) {
  e.preventDefault();

  var newGrade = {
    assignmentName: $('#newGradeAssignmentName').val(),
    studentScore: $('#newGradeStudentScore').val(),
    totalScore: $('#newGradeTotalScore').val(),
    letterGrade: $('#newGradeLetterGrade').val()
  };

  $('#newGradeAssignmentName').val('');
  $('#newGradeStudentScore').val('');
  $('#newGradeTotalScore').val('');
  $('#newGradeLetterGrade').val('');


  $.post('/api/grades', newGrade)
    .done(() => {
      // rerender the DOM
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function deleteGrade(e) {
  e.preventDefault();
  $.delete('/api/grades', newGrade)
    .done(() => {
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function openNewGradeModal() {
  $('.modal').modal('show');
}
