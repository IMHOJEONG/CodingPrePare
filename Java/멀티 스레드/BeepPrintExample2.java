public class BeepPrintExample2 {
    public static void main(String[] args){
            // 메인 스레드 

        Runnable beepTask = new BeepTask();
        Thread thread = new Thread(beepTask);
        /*
            // 다른 방법들 존재
            // Runnable 익명 객체
            Thread thread = new Thread(new Runnable(){
                @Override 
                public void run(){
                    Toolkit toolkit = Toolkit.getDefaultToolkit();
                    for(int i = 0 ; i < 5 ;i++){
                        toolkit.beep();
                        try{
                            Thread.sleep(500);
                        }
                        catch(Exception e){

                        }
                    }
                }
            });

            // 람다식 이용 
            Thread thread = new Thread(()-> {
                Toolkit toolkit = Toolkit.getDefaultToolkit();
                for(int i = 0 ; i < 5 ;i++){
                        toolkit.beep();
                        try{
                            Thread.sleep(500);
                        }
                        catch(Exception e){

                        }
                }
            })
            


        */
        thread.start(); // BeepRunnable


        for(int i = 0 ; i < 5 ;i++){
            System.out.println("띵");
            try{
                Thread.sleep(500);
            }
            catch(Exception e){

            }
        }
    }

}