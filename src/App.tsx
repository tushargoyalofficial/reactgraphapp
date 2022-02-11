import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrushChart from './pages/Brush';
import Visx from './pages/Visx';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/area" element={<ParentSize>
        {({ width, height }) => <Visx width={width} height={500} />}
      </ParentSize>} />
      <Route path="/brush" element={<ParentSize>
        {({ width, height }) => <BrushChart width={width} height={500} />}
      </ParentSize>} />
    </Routes>
  )
}

export default App;
