import java.awt.*;

public class BeepPrintExample1 {
    public static void main(String[] args){
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        for(int i = 0; i<5 ;i++){
            toolkit.beep();
            try {
                Thread.sleep(500);
            }
            catch(Exception e){

            }
        }
        for(int i = 0;i<5;i++){
            System.out.println("띵");
            try{
                Thread.sleep(500); 
            }
            catch(Exception e){

            }
        }
    }
}

// 프린팅은 메인 스레드가 담당하고 비프음을 들려주는 것은 작업 스레드가 담당하도록 수정 해보자
