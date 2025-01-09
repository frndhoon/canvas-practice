// fabricjs-react 라이브러리에서 필요한 컴포넌트와 훅을 가져옴
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { useEffect } from 'react';
// React/브라우저 환경에서는 ES Modules 시스템을 사용하므로 '* as' 구문이 필요
// (Node.js와 같은 CommonJS 환경에서는 import { fabric } from 'fabric' 형태로 사용)
import * as fabric from 'fabric';

export const DrawingCanvas = () => {
  // fabricjs 에디터 훅 사용
  // editor: 캔버스 조작을 위한 메서드들을 포함
  // onReady: 캔버스가 준비되었을 때 호출되는 콜백
  const { editor, onReady } = useFabricJSEditor();

  useEffect(() => {
    if (editor?.canvas) {
      // 캔버스 초기 설정
      // PencilBrush: 자유 곡선 그리기를 위한 브러시 도구
      editor.canvas.freeDrawingBrush = new fabric.PencilBrush(editor.canvas);
      // 브러시 굵기 설정 (픽셀 단위)
      editor.canvas.freeDrawingBrush.width = 5;
      // 브러시 색상 설정
      editor.canvas.freeDrawingBrush.color = '#000000';

      // 캔버스 크기와 배경색 설정
      editor.canvas.setWidth(800);
      editor.canvas.setHeight(600);
    }
  }, [editor]); // editor가 변경될 때마다 실행

  // 그리기 모드 켜기/끄기 토글 함수
  const toggleDrawing = () => {
    if (editor?.canvas) {
      editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
    }
  };

  // 원형 도형 추가 함수
  const onAddCircle = () => {
    editor?.addCircle();
  };

  // 사각형 도형 추가 함수
  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  return (
    <div>
      {/* 도형 추가 및 그리기 모드 제어를 위한 버튼들 */}
      <button onClick={onAddCircle}>원 추가</button>
      <button onClick={onAddRectangle}>사각형 추가</button>
      <button onClick={toggleDrawing}>그리기 모드 전환</button>
      {/* FabricJS 캔버스 컴포넌트 */}
      <FabricJSCanvas className='sample-canvas' onReady={onReady} />
    </div>
  );
};
