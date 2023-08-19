import Alert from "react-bootstrap/Alert";

export default function MessageBox(props) {
  return <Alert varient={props.varient || "Info"}>{props.children}</Alert>;
}
