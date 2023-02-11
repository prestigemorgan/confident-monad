import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Avatar, Button } from "antd";
import "../Assets/Styles/my-account.css";
import { Alert, } from "antd";
import withDraw from "../Assets/Images/withdraw.svg";
import tranFer from "../Assets/Images/transfer.svg";
import addMon from "../Assets/Images/add.svg";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

export const MyAccount = () => {
  const [userName, setUserName] = useState("Michael Carpenter");
  const [balance, setBalance] = useState("$506,064,488.00");
  const [showError, setShowError] = useState(false);

  const handleWithdraw = () => {
    setShowError(true);
  };

  return (
    <Layout className="a-lay">
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Avatar style={{ backgroundColor: "#87d068" }}>
              {userName[0].toUpperCase()}
            </Avatar>
            <span style={{ marginLeft: "10px" }}>{userName}</span>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Account</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#7EC881", padding: 24, minHeight: 280, borderRadius:10}} className="jaga-con">
          <div>
          <p className="acct-p">Total Balance</p>
          <h2 className="acct-h2"> {balance}</h2>
          </div>
          <div
          className="button-div"
          >
          <Button
            type="primary"
            style={{ textAlign:"left" }}
            onClick={handleWithdraw}
            className="acct-butt"
          >
            Withdraw
            <img src={withDraw} alt="withdraw" className="acct-img"  height="31px"/>
          </Button>
          <Button
            type="primary"
            style={{ textAlign:"left" }}
            onClick={handleWithdraw}
            className="acct-butt"
          >
            Transfer
            <img src={tranFer} alt="transfer" className="acct-img"  height="31px"/>
          </Button>
            <Button
            type="primary"
            style={{ textAlign:"left" }}
            onClick={handleWithdraw}
            className="acct-butt"
            >
            Add Money
            <img src={addMon} alt="add" className="acct-img"  height="31px"/>
            </Button>
          {showError && (
            <Alert
              style={{ marginTop: "20px" , marginLeft: "20px"}}
              className="alert"
              message="Your account is restricted"
              type="error"
              closable
              afterClose={ () => setShowError(false)}
            />
          )}
          </div>
         
        </div>
      </Content>
      <Footer style={{ textAlign: "center",  }} className="a-foot">
        <Link 
        to="/my-account"
        >
          Transaction History
        </Link>
      </Footer>
    </Layout>
  );
};
