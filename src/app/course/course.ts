export class Course {
  id: string
  name: string;
  professor: string;
  credits: number;

  public constructor(id: string , name: string, professor: string, credits: number) {
    this.id = id;
    this.name = name;
    this.professor = professor;
    this.credits = credits;
  }
}
