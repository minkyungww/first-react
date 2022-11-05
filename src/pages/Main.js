import HeadLayout from "components/layouts/HeadLayout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    


    const [num, setNum] = useState(0);

    const increase = () => setNum((prev) => prev + 1);
  
  return (
<HeadLayout>
<div>
        <div>메인페이지</div>
        <button onClick={() => navigate("/counter")}>카운터로 이동</button>
    </div>
</HeadLayout>
  )
}

export default Main
