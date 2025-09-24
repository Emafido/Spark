export default function StudentTable() {
  const students = [
    { name: "Emmanuel Felix", score: 85, grade: "A", details: "View details" },
    { name: "Ruth Ekpo", score: 72, grade: "B", details: "View details" },
    { name: "Jeremiah Kong", score: 90, grade: "A", details: "View details" },
    { name: "Rita Song", score: 65, grade: "B", details: "View details" },
    { name: "Mane Kwarma", score: 78, grade: "A", details: "View details" },
    { name: "Idris Ene", score: 54, grade: "C", details: "View details" },
    { name: "Ayomise Deborah", score: 61, grade: "B", details: "View details" },
    { name: "Paul Ono", score: 73, grade: "B", details: "View details" },
    { name: "Eve Song", score: 78, grade: "A", details: "View details" },
    { name: "David Olo", score: 41, grade: "D", details: "View details" },
    { name: "Samuel Mumba", score: 85, grade: "A", details: "View details" },
    { name: "Theresa Gomez", score: 88, grade: "A", details: "View details" },
    { name: "Iris West", score: 78, grade: "B", details: "View details" },
    { name: "Barry Allen", score: 93, grade: "A", details: "View details" },
  ];

  return (
    <div className="overflow-x-auto font-[poppins]">
      <table className=" text-sm text-center w-full">
        <thead className="bg-blue-100  text-gray-700">
          <tr>
            <th className="px-2.5 py-2 ">Student Name</th>
            <th className="px-2.5 py-2 "> Latest Score</th>
            <th className="px-2.5 py-2 "> Grade</th>
            <th className="px-2.5 py-2 "> </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="px-2.5 py-2 ">{student.name}</td>
              <td className="px-2.5 py-2 ">{student.score}</td>
              <td className="px-2.5 py-2 ">{student.grade}</td>
              <td
                className="px-2.5 py-2 hover:underline hover:
              underline-offset-4 cursor-pointer transition-all ease-linear text-blue-600"
              >
                {student.details}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
