import { Routes, Route } from 'react-router-dom';
// pages import 해주기
function App() {
  return (
    <Routes>
      {/* 경로 수정 필요(PATH이용하기) */}
      <Route path="/auth" element={<div>signup/signin 넣을 공간</div>} />
      <Route path="/" element={<div>todo 내용 넣을 공간</div>} />
    </Routes>
  );
}

export default App;
