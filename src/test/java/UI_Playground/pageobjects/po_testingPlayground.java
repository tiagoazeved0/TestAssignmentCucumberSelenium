package pageobjects;

public class po_testingPlayground {

    // Collection of XPaths of Elements in UI Testing Playground


   // Button with text 'Button with Dynamic ID'
    public static String buttonDynamicID = "//button[contains(text(),'Button with Dynamic ID')]";

    // Button with text 'Button'
    public static String button = "//button[contains(text(),'Button')]";

    // Button with @id 'greenButton'
    public static String buttonGreenButton = "//button[contains(@id,'greenButton')]";

    // Button with text 'Button Appearing After Delay'
    public static String buttonAppearingAfterDelay = "//button[contains(text(),'Button Appearing After Delay')]";

    // Button with text 'Button Triggering AJAX Request'
    public static String buttonTriggeringAJAXRequest = "//button[contains(text(),'Button Triggering AJAX Request')]";

    // Text Box with text 'Data loaded with AJAX get request'
    public static String textboxDataLoadedAJAX = "//p[contains(text(),'Data loaded with AJAX get request.')]";
}
