// import { ChallengeRepositoryInMemory } from '../../Repository/in-memory/ChallengeRepositoryInMemory/ChallengeRepositoryInMemory';
// import { StudentRepositoryInMemory } from '../../Repository/in-memory/StudentRepositoryInMemory/StudentRepositoryInMemory';
// import { SubmissionRepositoryInMemory } from '../../Repository/in-memory/SubmissionRepository/SubmissionRepositoryInMemory';

// // import { CreateSubmissionUseCase } from '../../Services/useCases/Submission/CreateSubmission/CreateSubmissionUseCase';

// let submissionRepository: SubmissionRepositoryInMemory;
// let studentRepository: StudentRepositoryInMemory;
// let challengeRepository: ChallengeRepositoryInMemory;

// let createSubmissionUseCase: CreateSubmissionUseCase;

// describe("Create new Submission", () => {

//   beforeEach(async () => {

//     submissionRepository = new SubmissionRepositoryInMemory();
//     studentRepository = new StudentRepositoryInMemory();
//     challengeRepository = new ChallengeRepositoryInMemory();

//     createSubmissionUseCase = new CreateSubmissionUseCase(submissionRepository, studentRepository, challengeRepository);

//   });

//   test("Should be create a new Challenge Submission", async () => {

//     const newStudent = {

//       name: "Matheus Guirra Sousa",
//       email: "guirramatheus1@gmail.com",
//       password: "V1209",
//       challenge: [{ title: "Query Database", instructionsUrl: "www.GodIsGoodAllTheTime.com.br", id: "hjtus84816756", studentId: "s13oj53hirfofj-gsdugsg" }]
//     }

//     const { name, email, password, challenge } = newStudent;

//     await studentRepository
//       .create(name, email, password, challenge);

//     const findStudent = await studentRepository
//       .findOne(email);

//     const newChallenge = {

//       title: "Database Query",
//       instructionsUrl: "Challenge InstructionsUrl Test"
//     }

//     const { title, instructionsUrl } = newChallenge;

//     await challengeRepository
//       .create(title, instructionsUrl);

//     const findChallenge = await challengeRepository
//       .findOne(title);

//     expect(findStudent)
//       .toHaveProperty("id");

//     expect(findChallenge)
//       .toHaveProperty("id");
//   });
// });