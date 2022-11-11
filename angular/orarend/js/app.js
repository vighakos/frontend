var app = new angular.module('orarendApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.title = 'Órarend App';
    $scope.company = 'Bajai SZC Türr István Technikum';
    $scope.author = '2/14. szft';
    $scope.newdata = {};
    $scope.dayOfWeek = moment(new Date()).isoWeekday() - 1;
    $scope.aktTime = moment(new Date()).format('HH:mm');
    $scope.subject = {};

    $scope.hours = [
        { nr: 0, start: '07:15', end: '07:55' },
        { nr: 1, start: '08:00', end: '08:45' },
        { nr: 2, start: '08:55', end: '09:40' },
        { nr: 3, start: '09:50', end: '10:35' },
        { nr: 4, start: '10:50', end: '11:35' },
        { nr: 5, start: '11:45', end: '12:30' },
        { nr: 6, start: '12:40', end: '13:25' },
        { nr: 7, start: '13:30', end: '14:05' },
        { nr: 8, start: '14:06', end: '15:25' }
    ];

    $scope.days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];

    $scope.subjects = angular.fromJson(localStorage.getItem('subjects'));
    if ($scope.subjects == null) {
        $scope.subjects = [];
    }

    $scope.timetables = angular.fromJson(localStorage.getItem('timetable'));
    if ($scope.timetables == null) {
        $scope.timetables = [];
    } else {
        $scope.timetables.forEach((timetable) => {
            let idx = $scope.subjects.findIndex(item => item.id == timetable.subject);
            if (idx > -1) {
                timetable = Object.assign(timetable, {
                    room: $scope.subjects[idx].room,
                    teacher: $scope.subjects[idx].teacher,
                    subjectName: $scope.subjects[idx].name,
                    color: $scope.subjects[idx].color
                });
            }
        });

        console.log($scope.timetables);
    }

    $scope.addToTimetable = function() {
        if ($scope.newdata.day == null || $scope.newdata.hour == null || $scope.newdata.subject == null) {
            alert('Nem adtál meg minden adatot!');
        } else {

            let idx = $scope.timetables.findIndex(item => (item.day == $scope.newdata.day && item.hour == $scope.newdata.hour));

            if (idx == -1) {
                let idx = $scope.subjects.findIndex(item => item.id == $scope.newdata.subject);
                $scope.timetables.push({
                    id: $scope.timetables.length + 1,
                    day: $scope.newdata.day,
                    hour: $scope.newdata.hour,
                    subject: $scope.newdata.subject,
                    room: $scope.subjects[idx].room,
                    teacher: $scope.subjects[idx].teacher,
                    subjectName: $scope.subjects[idx].name,
                    color: $scope.subjects[idx].color
                });
                localStorage.setItem('timetable', angular.toJson($scope.timetables));
            } else {
                if (confirm('Erre az időpontra már van felvéve óra! Felülírod?')) {
                    let idx = $scope.subjects.findIndex(item => item.id == $scope.newdata.subject);
                    $scope.timetables.splice(idx, 1);
                    $scope.timetables.push({
                        id: $scope.timetables.length + 1,
                        day: $scope.newdata.day,
                        hour: $scope.newdata.hour,
                        subject: $scope.newdata.subject,
                        room: $scope.subjects[idx].room,
                        teacher: $scope.subjects[idx].teacher,
                        subjectName: $scope.subjects[idx].name,
                        color: $scope.subjects[idx].color
                    });
                    localStorage.setItem('timetable', angular.toJson($scope.timetables));
                }
            }
        }
    }

    $scope.deleteFromTimetable = function(id) {
        if (confirm('Biztosan törlöd az órát az órarendből?')) {
            let idx = $scope.timetables.findIndex(item => (item.id == id));
            $scope.timetables.splice(idx, 1);
            localStorage.setItem('timetable', angular.toJson($scope.timetables));
        }
    }

    $scope.saveSubject = function() {
        if ($scope.subject.name == null || $scope.subject.teacher == null || $scope.subject.room == null) {
            alert('Nem adtál meg minden kötelező adatot!');
        } else {
            let data = {
                id: $scope.subjects.length + 1,
                name: $scope.subject.name,
                teacher: $scope.subject.teacher,
                room: $scope.subject.room,
                color: $scope.subject.color
            }
            $scope.subjects.push(data);
            localStorage.setItem('subjects', angular.toJson($scope.subjects));
            $scope.subject = {};
            // JQuery hívás
            $('#newSubjectForm').modal('hide');
        }
    }

});