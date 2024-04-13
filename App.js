//* ReactElement(object) => HTML(Brower understand)
// สร้าง element ใน react

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'am an h1 tag")
  )
);

// สร้าง Root เพื่อที่จะเป็นสถานที่ให้โค้ดทั้งหมดของ react run

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // reder จะ convert object ที่ได้จาก heading เป็น html แล้ว put ลงใน dom
