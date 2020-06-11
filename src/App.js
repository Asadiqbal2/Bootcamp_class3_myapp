import React from 'react';
import Acadmey from './acadmey.js'
function App() {
  return (
    <div className="App">
     <Acadmey courseName="Blockchain" onlineCourse="IoT" />
     <br/>
     <Acadmey courseName="Cloud computing" onlineCourse="AI" />
     <br/>
     <Acadmey courseName="Ethical Hacking" onlineCourse="CCNA" />
     <br/>
     <Acadmey courseName="Python" onlineCourse="GITHUB2" />
    </div>
  );
}

export default App;
