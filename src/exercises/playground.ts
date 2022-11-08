/* eslint-disable */

type Names = "Andre" | "Britta" | "Michael";

// type inference
const getName = (name?: Names) => {
  return (name ?? "No name provided") as "3";
};

// leads to error
// getName() === "4"

// getName("Andre");
console.log(getName());

export {};

type ISBN = `${string}-${string}-${string}-${string}`;

const myISBN: ISBN = "123-34-232-23";

type BookType = {
  isbn: string;
  title: string;
  pages?: number;
};

type MagazineType = BookType & {
  isbn: "2";
  coverUrl: string;
};

const myMagazine: MagazineType = {
  title: "",
  coverUrl: "",
  isbn: "2",
  pages: 2,
};

interface MyBookT {
  title: string;
  isbn: string;
  price: number;
}

type MyMagazineT = { title: string; issn: string };
type ReadingMaterialT = MyBookT | MyMagazineT;

//

type Book = {
  title: string;
  isbn: string;
};

type Magazine = {
  title: string;
  issn: string;
};

type ReadingMaterial = Book | Magazine;

const readingMaterial = [
  {
    title: "New Covid-19 vaccine",
    isbn: "978-3401002569",
    price: 9,
  },
  {
    title: "Robinson Crusoe",
    issn: "21212-212",
  },
];

const getBook = (price: number): ReadingMaterial | undefined =>
  readingMaterial.find((rM) => rM.price === price);

const foundBook = getBook(9);

function isBook(readingMaterial: Book | Magazine): readingMaterial is Book {
  return (readingMaterial as Book).isbn !== undefined;
}

if (foundBook && isBook(foundBook)) {
  foundBook.isbn;
}

type Response<IdType extends string> = {
  id: IdType;
  name: string;
};

type StringResponse = Response<"1" | "2" | "3">;

const myResponse: StringResponse = { id: "3", name: "foo" };

const logIdentity = <T extends number | string>(arg: T): T => {
  console.log(arg);
  return arg;
};

logIdentity(5);

const myString = "3" as string;
