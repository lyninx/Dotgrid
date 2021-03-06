function Keyboard()
{
  this.listen = function(event)
  { 
    console.log(event.keyCode);
    switch (event.keyCode) {
      case 65 : dotgrid.draw_arc(event.shiftKey ? "1,1" : "0,1"); break;
      case 83 : dotgrid.draw_arc(event.shiftKey ? "1,0" : "0,0"); break;
      case 68 : dotgrid.draw_line(); break;

      case 81 : dotgrid.reset(); break;
      case 87 : dotgrid.erase(); break;
      case 69 : dotgrid.export(); break;

      case 90 : dotgrid.draw_dot(); break;
      case 88 : dotgrid.draw_circle(); break;
      case 67 : dotgrid.draw_rect(); break;
    }
  }
}
