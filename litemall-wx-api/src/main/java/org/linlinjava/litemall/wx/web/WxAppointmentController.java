package org.linlinjava.litemall.wx.web;

import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.linlinjava.litemall.core.util.ResponseUtil;
import org.linlinjava.litemall.db.domain.LitemallCategory;
import org.linlinjava.litemall.db.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 类目服务
 */
@RestController
@RequestMapping("/wx/appointment")
@Validated
public class WxAppointmentController {

    private final Log logger = LogFactory.getLog(WxAppointmentController.class);

    @Autowired
    private AppointmentService appointmentService;

    /**
     * 分类详情
     *
     * @param id 分类类目ID。
     * 如果分类类目ID是空，则选择第一个分类类目。
     * 需要注意，这里分类类目是一级类目
     * @return 分类详情
     */
    @GetMapping("list")
    public Object list(Integer id) {

        // 所有一级分类目录
        List<LitemallCategory> l1CatList = appointmentService.queryL1();

        // 当前一级分类目录
        LitemallCategory currentCategory = null;
        if (id != null) {
            currentCategory = appointmentService.findById(id);
        } else {
            currentCategory = l1CatList.get(0);
        }


        return ResponseUtil.ok();
    }

}
