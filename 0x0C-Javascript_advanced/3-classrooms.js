function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return () => (seat);}
    let students = [];
    for (let seat = 0; seat < numbersOfStudents; seat++) {
        students.push(studentSeat(seat + 1));
    }
    return students;
}

let classRoom = createClassRoom(10);
