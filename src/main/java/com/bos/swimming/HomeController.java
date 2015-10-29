package com.bos.swimming;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Scott on 10/8/2015.
 *
 * @author boss
 */
@Controller
public class HomeController {

    @RequestMapping(method = RequestMethod.GET, value="/")
    public String home() {
        return "index";
    }

}
