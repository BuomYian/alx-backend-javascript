import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((student) => student.id);
}
