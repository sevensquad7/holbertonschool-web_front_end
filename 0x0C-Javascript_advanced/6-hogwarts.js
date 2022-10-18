function studentHogwarts() {
    let privateScore = 0;
    let name = null;
  
    const changeScoreBy = (points) => (privateScore += points);
  
    this.setName = (newName) => (name = newName);
    this.rewardStudent = () => changeScoreBy(1);
    this.penalizeStudent = () => changeScoreBy(-1);
    this.getScore = () => `${name}: ${privateScore}`;
  }
  
  const harry = new studentHogwarts();
  harry.setName("Harry");
  for (let i = 0; i < 4; i++) harry.rewardStudent();
  
  console.log(harry.getScore());
  
  const draco = new studentHogwarts();
  draco.setName("Draco");
  draco.rewardStudent();
  for (let i = 0; i < 3; i++) draco.penalizeStudent();
  
  console.log(draco.getScore());
