const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const listDefault = require('./list_default');
const listRoomOff = require('./listRoomOff');
const listRoomOn = require('./listRoomOn');
const listDetailsLesson = require('./listDetailsLesson');
const listDetailsStudent = require('./listDetailsStudent');
const listCLass = require('./listCLass');
const currentLesson = require('./currentLesson');
const lessonNotes = require('./lessonNotes');
const notificationList = require('./notification-list');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// const listExamJson = require('./list-exam.json');
// const examJson = require('./exam.json');
// const ieltsJson = require('./examIelts.json');
// const startExamJson = require('./start-exam.json');
// const exam1 = require('./exam1.json')
// const exam2 = require('./exam2.json')
// const exam3 = require('./exam3.json')

let notification = [];
for (let index = 0; index < 11; index++) {
  notification.push(
    {
      title: 'Thông báo học bù nghỉ lễ 30/4-1/5',
      sentDate: '10:00 28/04/2022',
      from: 'Trần Thanh Tùng',
      to: 'IELTS 167',
      content: 'Đây là thông báo lịch học offline của lớp IELTS101 Địa điểm: Phòng 302, tầng 5, tòa nhà Tây Hà, 19 Tố Hữu Giờ học: thứ 3, 5 hàng tuần từ 16h-17h30',
      status: Math.floor(Math.random() * 3)
    },
  );
}

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/list-defaults', (req, res) => {
  setTimeout(() => {
    res.json(listDefault);
  }, 500)
})

app.get('/list-room_on', (req, res) => {
  setTimeout(() => {
    res.json(listRoomOn);
  }, 500)
})

app.get('/list-room_off', (req, res) => {
  setTimeout(() => {
    res.json(listRoomOff);
  }, 500)
});

app.get('/list-details', (req, res) => {
  setTimeout(() => {
    res.json({
      id: 'IELTS167',
      status: Math.round(Math.random() * 1),
      startDate: '24/04/2022',
      teacher: ['Trần Thanh Tùng', 'Diệp Linh Chi'],
      subTeacher: ['Diệp Linh Chi'],
      caregiver: ['Diệp Linh Chi'],
      listDetailsLesson: listDetailsLesson,
      listStudentDetails: listDetailsStudent,
      repeat: Boolean(Math.round(Math.random() * 1)),
      count: 64,
      class: 7,
      classStatus: Boolean(Math.round(Math.random() * 1)),
      classRoom: 'Rosy',
      classType: 1,
    })
  }, 500)
})
app.get('/list-class-present', (req, res) => {
  setTimeout(() => {
    res.json(listCLass);
  }, 500)
});

app.get('/list-ended-class', (req, res) => {
  setTimeout(() => {
    res.json(listCLass);
  }, 500)
});

app.get('/current-lesson', (req, res) => {
  setTimeout(() => {
    res.json(currentLesson);
  }, 500)
});

app.get('/lesson-notes', (req, res) => {
  setTimeout(() => {
    res.json(lessonNotes);
  }, 500)
});

app.get('/lesson-notes-details', (req, res) => {
  setTimeout(() => {
    res.json({
      title: '[Gia sư toán 7] Ghi chú buổi học ngày 12/05/2022',
      content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.'
    });
  }, 500)
});
app.get('/notification-list', (req, res) => {
  setTimeout(() => {
    res.json(notification);
  }, 100)
})
app.get('/notification/:id', (req, res) => {
  setTimeout(() => {
    res.json(notification[req.params.id]);
  }, 100)
})

app.get('/notice-form', (req, res) => {
  setTimeout(() => {
    res.json([
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xin',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },

      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },

      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },
      {
        title: 'Thông báo lịch học offline',
        creator: 'Trần Thanh Tùng',
        content: 'U là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.\n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé.\n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi \n\nU là trời, công ty gì mà toàn trai xinh gái đẹp, lại còn cực kỳ năng động và sáng tạo nữa chứ. Môi trường làm việc lý tưởng, sếp thì tâm lý, leader thì đáng yêu, đồng nghiệp thân thiện như một gia đình, phúc lợi toẹt vời. Ai muốn trở thành idol top top, chiến thần Marketing thì về ngay đội của chúng mình nhé. \n\nLà một sinh viên sư phạm, tôi luôn trăn trở ngoài việc trở thành GV, tôi có thể làm gì để cống hiến cho nền giáo dục. Và Edmicro, những SV Sư phạm vẫn có thể mở ra cánh cửa tri thức gắn với công nghệ hiện đại cho HS. Ngôi nhà Edmicro”, nơi tôi được quan tâm, có thêm hiểu biết và tình đoàn kết.',
        lastEdit: '25/04/2022'
      },

    ]);
  }, 100)
})


// app.get('/list-exam/exam', (req, res) =>{
//   res.json(examJson);
// })

// app.get('/list-exam/exam/ielts', (req, res) =>{
//   res.json(ieltsJson);
// })

// app.get('/list-exam/exam/ielts/start', (req, res) => {
//   res.json(startExamJson);
// })
// app.get('/list-exam/exam/ielts/exam/:id', (req, res) => {
//   console.log(req.params.id); 
//   if (req.params.id == 1) {
//     res.json(exam1);
//   }
//   if (req.params.id == 2) {
//     res.json(exam2);
//   }
//   if (req.params.id == 3) {
//     res.json(exam3);
//   }
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
