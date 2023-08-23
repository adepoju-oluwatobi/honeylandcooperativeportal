import React, { useContext, useEffect } from "react";
import { coperativeUserContext } from "../components/Context";

function Dashboard() {
  const { userInfo, user_dash, ready } = useContext(coperativeUserContext);

  useEffect(() => {
    // Check if userInfo is available and ready
    if (ready && userInfo) {
      console.log(userInfo);
    }
  }, [userInfo, ready]);

  return (
    <div>
      {/* ... rest of your JSX code */}
      {ready && userInfo && (
        <div>
          <p>Hello, {user_dash}</p>
          <p>Available Balance: {userInfo.availableBalance}</p>
          <p>Loan Amount: {userInfo.loanAmount}</p>
          {/* ... other fields */}
        </div>
      )}
      {/* ... rest of your JSX code */}
    </div>
  );
}

export default Dashboard;
