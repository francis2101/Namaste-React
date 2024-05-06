// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World From React !!!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is h1 tag"),
//     React.createElement("h2", {}, "This is h2 Tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This's h1 tag"),
    React.createElement("h2", {}, "This's h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
