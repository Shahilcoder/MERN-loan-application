import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import { Tabs, Input, Button, Card } from "antd";
import { useState } from "react";
const { TabPane } = Tabs;
const { TextArea } = Input;

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState(0);
  const [bussinessName, setBussinessName] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0.0);
  const [tenure, setTenure] = useState(0);

  const handleSubmit = () => {
    axios.post('http://localhost:5000/insert', {
      firstName,
      lastName,
      age,
      mobile,
      bussinessName,
      gstNo,
      address,
      amount,
      rate,
      tenure
    });
  };

  return (
    <div className="app">
      <Card title="Loan Application" bordered={true} style={{ width: 800 }}>
        <Tabs defaultActiveKey="1" className="app__tabs">
          <TabPane
            tab="Personal"
            key="1"
            style={{ padding: "50px", paddingTop: "0", paddingBottom: "0" }}
          >
            <div className="app__input">
              First Name{" "}
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="app__input">
              Last Name{" "}
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="app__input">
              Age <Input value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="app__input">
              Mobile{" "}
              <Input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </TabPane>
          <TabPane
            tab="Business"
            key="2"
            style={{ padding: "50px", paddingTop: "0", paddingBottom: "0" }}
          >
            <div className="app__input">
              Business Name{" "}
              <Input
                value={bussinessName}
                onChange={(e) => setBussinessName(e.target.value)}
              />
            </div>
            <div className="app__input">
              GST No{" "}
              <Input value={gstNo} onChange={(e) => setGstNo(e.target.value)} />
            </div>
            <div className="app__input">
              Address{" "}
              <TextArea
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </TabPane>
          <TabPane
            tab="Application"
            key="3"
            style={{ padding: "50px", paddingTop: "0", paddingBottom: "0" }}
          >
            <div className="app__input">
              Loan Amount{" "}
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="app__input">
              Interest Rate{" "}
              <Input value={rate} onChange={(e) => setRate(e.target.value)} />
            </div>
            <div className="app__input">
              Loan Tenure{" "}
              <Input
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
            <Button
              type="primary"
              style={{ marginTop: "10px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default App;
