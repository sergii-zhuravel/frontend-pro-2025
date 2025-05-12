import Button from "./Button";

const Item = () => {
  return (
    <li className="d-flex justify-content-between mb-2 mt-2 listItem">
      <span>Text</span>
      <div>
        <Button className="btn btn-success mr-2" title="Done" />
        <Button className="btn btn-danger" title="Delete" />
        {/* <button className="btn btn-success mr-2">Done</button>
                <button className="btn btn-danger">Delete</button> */}
      </div>
    </li>
  );
};

export default Item;
