import React, { useContext } from "react";

import { MDBBtn } from "mdbreact";
import { Row, Col } from "react-bootstrap";

import Content from "../app/Content";
import { DataContext } from "../utils/DataProvider";
import EmptyRow from "../utils/EmptyRow";

import Algorand from "../utils/Algorand";

import "./Login.css";

const Home = props => {
  const ctx = useContext(DataContext);

  const login = () => {
    const file = document.createElement("input");
    file.style.display = "none";
    file.type = "file";
    file.name = "file";
    file.accept = ".txt";
    document.getElementById("root").appendChild(file);

    file.onchange = e => {
      const f = e.target.files[0];

      const fr = new FileReader();
      fr.onload = async evt => {
        try {
          const wallet = Algorand.getWallet(evt.target.result);
          ctx.setWallet(wallet);
          ctx.setPage("transfer");
          Algorand.getAccount(ctx.network, wallet.address).then(ctx.setAccount);

          document.getElementById("root").removeChild(file);
        } catch (err) {
          alert("Invalid ALGO wallet file!");
        }
      };
      fr.readAsText(f);
    };
    file.click();
  };

  const createWallet = () => {
    const wallet = Algorand.createWallet();

    const ele = document.createElement("a");
    ele.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(wallet.mnemonic)
    );
    ele.setAttribute("download", `algorand-wallet-${wallet.address}.txt`);
    ele.style.display = "none";
    document.body.appendChild(ele);

    ele.click();

    document.body.removeChild(ele);

    ctx.setWallet(wallet);
  };

  return (
    <div>
      <Content header="Login">
        <Col>
          <EmptyRow />
          <Row>
            <Col className="text-center">
              {ctx.wallet === null ? (
                <MDBBtn color={ctx.colorClass} onClick={createWallet}>
                  Create
                </MDBBtn>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="login-signup-prompt">
                {ctx.wallet === null
                  ? "Do not have an wallet? Create one now!"
                  : "Your wallet has been downloaded! Upload it to login"}
              </p>
            </Col>
          </Row>
        </Col>
      </Content>
      <Row>
        <Col className="text-center">
          <MDBBtn color={ctx.colorClass} onClick={login}>
            Login
          </MDBBtn>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
