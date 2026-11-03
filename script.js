/**
 * JAVASCRIPT CONTROLLER - APPLE iOS FROSTED GLASS & BILINGUAL I18N
 * Author: Đặng Anh Quân
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. BILINGUAL DICTIONARY (VIETNAMESE <-> ENGLISH)
  // --------------------------------------------------------------------------
  const i18nData = {
    vi: {
      banner_status: 'Đang tìm kiếm cơ hội <strong>Software Engineering Intern / .NET Developer</strong>',
      banner_cta: 'Liên hệ ngay &rarr;',
      nav_about: 'Giới thiệu',
      nav_skills: 'Kỹ năng',
      nav_projects: 'Dự án',
      nav_education: 'Học vấn',
      nav_goals: 'Mục tiêu',
      nav_contact: 'Liên hệ',
      print_btn: 'In / Lưu PDF',
      hero_role_badge: 'Mục tiêu: Software Engineering Intern / Developer',
      hero_greeting: 'Xin chào, tôi là',
      hero_bio: 'Tôi là một người cầu tiến, có các kỹ năng xử lý vấn đề, xử lý tình huống, kiên trì không ngại khó khăn hay thử thách, thích học hỏi những điều mới mẻ.',
      copy_tag: 'Sao chép',
      hero_address: 'Kiên Đài - Tuyên Quang, Việt Nam',
      hero_btn_projects: 'Xem Dự Án',
      hero_btn_contact: 'Gửi Thư Tuyển Dụng',
      avatar_status: 'Sẵn sàng phỏng vấn',
      avatar_stat_label: 'Sinh viên CNTT',
      avatar_stat_value: 'GPA 3.3 / 4.0',
      skills_tag: 'Năng lực cốt lõi',
      skills_title: 'Kỹ Năng Chuyên Môn',
      skills_desc: 'Các ngôn ngữ, nền tảng công nghệ và công cụ được trang bị vững chắc từ chương trình đào tạo và đồ án thực tế.',
      skill_lang_title: 'Ngôn Ngữ Lập Trình',
      skill_lang_desc: 'Thành thạo lập trình hướng đối tượng (OOP), cấu trúc dữ liệu và giải thuật.',
      skill_frame_title: 'Framework & Nền Tảng',
      skill_frame_desc: 'Xây dựng ứng dụng hiện đại, tối ưu hiệu năng và kiến trúc module hóa.',
      skill_db_title: 'Cơ Sở Dữ Liệu',
      skill_db_desc: 'Thiết kế CSDL quan hệ chuẩn, viết truy vấn T-SQL tối ưu và thủ tục lưu trữ.',
      skill_tools_title: 'Công Cụ & Quy Trình',
      skill_tools_desc: 'Quản lý mã nguồn, môi trường phát triển và tuân thủ quy trình phát triển Agile.',
      skill_soft_title: 'Kỹ Năng Mềm & Phong Cách Làm Việc',
      soft_teamwork_title: 'Làm việc nhóm (Teamwork)',
      soft_teamwork_desc: 'Hợp tác chặt chẽ, giao tiếp rõ ràng và luôn chủ động hỗ trợ đồng đội.',
      soft_req_title: 'Phân tích yêu cầu (Requirements)',
      soft_req_desc: 'Khả năng phân tích bài toán, xác định yêu cầu nghiệp vụ và chuyển hóa thành kiến trúc phần mềm.',
      soft_pres_title: 'Thuyết trình & Báo cáo',
      soft_pres_desc: 'Trình bày mạch lạc giải pháp kỹ thuật, demo tính năng sản phẩm trước nhóm và giảng viên.',
      proj_tag: 'Kinh nghiệm thực hành',
      proj_title: 'Dự Án Tiêu Biểu',
      proj_desc: 'Đồ án thực tế áp dụng kiến trúc phần mềm chuẩn, tối ưu dữ liệu và quy trình phát triển chuyên nghiệp.',
      proj_featured_badge: 'Dự án nổi bật',
      proj_timeline: '23/08/2026 – 20/10/2026',
      proj_source_btn: 'Mã nguồn GitHub',
      proj_name: 'Monthly Parking System (MPS)',
      proj_subtitle: 'Hệ thống Quản lý Bãi đỗ xe Tháng thông minh và Tự động hóa kiểm soát',
      proj_feat_title: 'Các tính năng cốt lõi đã triển khai:',
      proj_feat_1_title: 'Quản lý thuê bao vé tháng:',
      proj_feat_1_desc: ' Đăng ký, gia hạn, tạm khóa và quản lý chi tiết thông tin phương tiện (ô tô, xe máy) và khách hàng.',
      proj_feat_2_title: 'Kiểm soát vào / ra tự động:',
      proj_feat_2_desc: ' Xác thực nhanh thẻ xe tháng, đối soát biển số và thời hạn hiệu lực với độ trễ tối thiểu.',
      proj_feat_3_title: 'Tính toán chi phí & hóa đơn:',
      proj_feat_3_desc: ' Tự động tính cước phí dịch vụ theo chu kỳ, xử lý phát sinh cước vượt giờ và xuất biên lai.',
      proj_feat_4_title: 'Báo cáo thống kê:',
      proj_feat_4_desc: ' Trực quan hóa số lượng xe trong bãi, lượt xe ra vào trong ngày và doanh thu theo chu kỳ tháng.',
      proj_tech_title: 'Điểm nổi bật về mặt kỹ thuật:',
      proj_tech_1: '<strong>Kiến trúc & Lập trình:</strong> Áp dụng chặt chẽ các nguyên lý lập trình hướng đối tượng (OOP) nhằm module hóa hệ thống, dễ dàng mở rộng và bảo trì.',
      proj_tech_2: '<strong>Cơ sở dữ liệu:</strong> Thiết kế chuẩn hóa quan hệ CSDL trên SQL Server, tối ưu khóa ngoại và chỉ mục để xử lý truy vấn nhanh chóng.',
      proj_tech_3: '<strong>Quy trình phát triển:</strong> Xây dựng tài liệu yêu cầu (PRD), phân rã tính năng thành các User Stories theo phương pháp Agile/Scrum.',
      edu_tag: 'Học thức & Nền tảng',
      edu_title: 'Học Vấn',
      edu_desc: 'Chương trình đào tạo chính quy, xây dựng nền tảng tư duy thuật toán và kỹ thuật lập trình vững chắc.',
      edu_school: 'Trường Đại Học Công Nghệ Thông Tin & Truyền Thông Thái Nguyên (ICTU)',
      edu_major_prefix: 'Ngành: ',
      edu_major: 'Kỹ Thuật Phần Mềm (Software Engineering)',
      edu_core_title: 'Các Môn Học Cốt Lõi Đạt Kết Quả Tốt:',
      course_dsa: 'Cấu trúc dữ liệu và giải thuật',
      course_oop: 'Lập trình hướng đối tượng',
      course_dbms: 'Hệ quản trị cơ sở dữ liệu',
      course_se: 'Phân tích & Thiết kế phần mềm',
      goal_title: 'Mục Tiêu Thực Tập & Định Hướng Phát Triển',
      goal_subtitle: 'Kế hoạch rèn luyện và đóng góp giá trị cho doanh nghiệp',
      goal_short_title: 'Mục tiêu ngắn hạn (6 - 12 tháng)',
      goal_short_desc: 'Trở thành một <strong>Software Engineering Intern</strong> nhanh nhẹn và đóng góp hiệu quả; làm quen sâu sắc với quy trình phát triển thực tế, kiểm thử Unit Test, xây dựng API với .NET Core và tiếp thu kinh nghiệm từ các Senior Engineer.',
      goal_long_title: 'Mục tiêu dài hạn (2 - 3 năm)',
      goal_long_desc: 'Phát triển vững vàng lên vị trí <strong>Software Developer / Backend Engineer</strong> nòng cốt, làm chủ các kiến trúc hệ thống hiện đại, tối ưu hiệu năng cơ sở dữ liệu và xây dựng giải pháp phần mềm ổn định, có khả năng mở rộng cao.',
      contact_tag: 'Kết nối hợp tác',
      contact_title: 'Thông Tin Liên Hệ',
      contact_desc: 'Tôi luôn sẵn sàng đón nhận cơ hội thực tập, phỏng vấn và trao đổi chuyên môn.',
      contact_email_label: 'Hộp thư điện tử:',
      contact_copy_btn: 'Sao chép',
      contact_address_label: 'Địa chỉ thường trú:',
      contact_address_val: 'Kiên Đài - Tuyên Quang, Việt Nam',
      contact_address_badge: 'Quê quán',
      footer_copy: '&copy; 2026 <strong>Đặng Anh Quân</strong>. Tất cả thông tin được bảo lưu.',
      footer_desc: 'Thiết kế giao diện kính mờ phong cách Apple iOS & Tối ưu hóa cho Nhà tuyển dụng.',
      back_to_top: 'Lên đầu trang',
      toast_copied: 'Đã sao chép vào bộ nhớ tạm!'
    },

    en: {
      banner_status: 'Actively seeking <strong>Software Engineering Intern / .NET Developer</strong> opportunities',
      banner_cta: 'Contact now &rarr;',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_education: 'Education',
      nav_goals: 'Goals',
      nav_contact: 'Contact',
      print_btn: 'Print / PDF',
      hero_role_badge: 'Target: Software Engineering Intern / Developer',
      hero_greeting: 'Hello, I am',
      hero_bio: 'I am a proactive and ambitious learner with strong problem-solving and troubleshooting skills. Highly persistent, resilient facing challenges, and always eager to learn and master new technologies.',
      copy_tag: 'Copy',
      hero_address: 'Kien Dai - Tuyen Quang, Vietnam',
      hero_btn_projects: 'View Projects',
      hero_btn_contact: 'Send Recruitment Email',
      avatar_status: 'Open for Interviews',
      avatar_stat_label: 'IT Undergrad',
      avatar_stat_value: 'GPA 3.3 / 4.0',
      skills_tag: 'Core Competencies',
      skills_title: 'Technical Skills',
      skills_desc: 'Solid foundation in programming languages, frameworks, databases, and development methodologies built through university coursework and practical projects.',
      skill_lang_title: 'Programming Languages',
      skill_lang_desc: 'Proficient in Object-Oriented Programming (OOP), Data Structures & Algorithms.',
      skill_frame_title: 'Frameworks & Platforms',
      skill_frame_desc: 'Building modern applications, optimizing performance, and modular software architecture.',
      skill_db_title: 'Databases',
      skill_db_desc: 'Relational database design, T-SQL query optimization, stored procedures, and indexing.',
      skill_tools_title: 'Tools & Methodologies',
      skill_tools_desc: 'Version control, IDE environments, and adherence to Agile/Scrum development cycles.',
      skill_soft_title: 'Soft Skills & Work Ethics',
      soft_teamwork_title: 'Teamwork & Collaboration',
      soft_teamwork_desc: 'Collaborative mindset, clear technical communication, and proactive peer support.',
      soft_req_title: 'Requirements Analysis',
      soft_req_desc: 'Deconstructing problem statements, gathering requirements, and modeling technical solutions.',
      soft_pres_title: 'Presentation & Reporting',
      soft_pres_desc: 'Clear articulation of technical solutions, architectural demos, and milestone reports.',
      proj_tag: 'Hands-on Experience',
      proj_title: 'Featured Projects',
      proj_desc: 'Practical system implementation applying OOP architecture, database design, and agile workflows.',
      proj_featured_badge: 'Featured Project',
      proj_timeline: '23/08/2026 – 20/10/2026',
      proj_source_btn: 'GitHub Repository',
      proj_name: 'Monthly Parking System (MPS)',
      proj_subtitle: 'Smart Monthly Parking Lot Management & Automated Access Control System',
      proj_feat_title: 'Core Features Implemented:',
      proj_feat_1_title: 'Monthly Subscription Management:',
      proj_feat_1_desc: ' Registering, renewing, suspending, and tracking customer & vehicle records (cars, motorbikes).',
      proj_feat_2_title: 'Automated Check-in / Check-out:',
      proj_feat_2_desc: ' Rapid NFC/Card verification, plate validation, and validity checks with ultra-low latency.',
      proj_feat_3_title: 'Fee Calculation & Invoicing:',
      proj_feat_3_desc: ' Automated billing cycle computation, overtime surcharge handling, and receipt generation.',
      proj_feat_4_title: 'Analytics & Reporting:',
      proj_feat_4_desc: ' Visualizing parking occupancy, daily vehicle turnover, and monthly revenue trends.',
      proj_tech_title: 'Technical Highlights:',
      proj_tech_1: '<strong>Architecture:</strong> Strictly applied Object-Oriented Programming (OOP) principles for high modularity, scalability, and maintainability.',
      proj_tech_2: '<strong>Database:</strong> Normalized relational database schema on Microsoft SQL Server, indexed keys for rapid query execution.',
      proj_tech_3: '<strong>Development Process:</strong> Formulated Product Requirement Document (PRD), decomposing features into sprint user stories via Agile/Scrum.',
      edu_tag: 'Academic Background',
      edu_title: 'Education',
      edu_desc: 'Formal undergraduate curriculum establishing strong algorithmic mindset and software engineering practices.',
      edu_school: 'Thai Nguyen University of Information & Communication Technology (ICTU)',
      edu_major_prefix: 'Major: ',
      edu_major: 'Software Engineering',
      edu_core_title: 'Core Technical Coursework:',
      course_dsa: 'Data Structures & Algorithms',
      course_oop: 'Object-Oriented Programming',
      course_dbms: 'Database Management Systems',
      course_se: 'Software Analysis & Design',
      goal_title: 'Internship Objectives & Career Trajectory',
      goal_subtitle: 'Continuous improvement plan and commitment to adding real business value',
      goal_short_title: 'Short-term Objectives (6 - 12 months)',
      goal_short_desc: 'Become a productive <strong>Software Engineering Intern</strong>; immerse in production workflows, Unit Testing, building robust .NET Core APIs, and learning from senior engineers.',
      goal_long_title: 'Long-term Vision (2 - 3 years)',
      goal_long_desc: 'Grow into a core <strong>Software Developer / Backend Engineer</strong>, mastering modern architectures, database performance optimization, and scalable systems.',
      contact_tag: 'Get In Touch',
      contact_title: 'Contact Details',
      contact_desc: 'Open for internship opportunities, technical interviews, and collaborative engineering discussions.',
      contact_email_label: 'Email Address:',
      contact_copy_btn: 'Copy',
      contact_address_label: 'Location:',
      contact_address_val: 'Kien Dai - Tuyen Quang, Vietnam',
      contact_address_badge: 'Hometown',
      footer_copy: '&copy; 2026 <strong>Dang Anh Quan</strong>. All rights reserved.',
      footer_desc: 'Engineered with Apple iOS frosted acrylic aesthetics & recruiter-optimized layout.',
      back_to_top: 'Back to Top',
      toast_copied: 'Copied to clipboard!'
    }
  };

  // --------------------------------------------------------------------------
  // 2. LANGUAGE SWITCHER (iOS SEGMENTED CONTROL)
  // --------------------------------------------------------------------------
  const htmlElement = document.documentElement;
  const langSwitch = document.getElementById('langSwitch');
  const segmentIndicator = document.getElementById('segmentIndicator');
  const segmentButtons = langSwitch ? langSwitch.querySelectorAll('.segment-btn') : [];

  let currentLang = localStorage.getItem('cv_lang') || 'vi';

  function applyLanguage(lang) {
    currentLang = lang;
    htmlElement.setAttribute('data-lang', lang);
    localStorage.setItem('cv_lang', lang);

    // Update Segmented Indicator Position
    if (segmentIndicator) {
      if (lang === 'en') {
        segmentIndicator.style.transform = 'translateX(100%)';
      } else {
        segmentIndicator.style.transform = 'translateX(0%)';
      }
    }

    // Update active button state
    segmentButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    const dict = i18nData[lang] || i18nData.vi;

    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update page title
    if (lang === 'en') {
      document.title = 'Dang Anh Quan | Software Engineering Intern - Portfolio & CV';
    } else {
      document.title = 'Đặng Anh Quân | Software Engineering Intern - Portfolio & CV';
    }
  }

  // Bind Segment Click Events
  segmentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      applyLanguage(selectedLang);
    });
  });

  // Apply Initial Language
  applyLanguage(currentLang);

  // --------------------------------------------------------------------------
  // 3. THEME TOGGLE (DARK / LIGHT WITH PERSISTENCE)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('cv_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme');
      const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('cv_theme', targetTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 4. PRINT / SAVE TO PDF
  // --------------------------------------------------------------------------
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --------------------------------------------------------------------------
  // 5. MOBILE NAVIGATION MENU
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. COPY EMAIL & TOAST NOTIFICATION
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyTextToClipboard(text) {
    const successMsg = currentLang === 'en' 
      ? `Copied email: ${text}` 
      : `Đã sao chép email: ${text}`;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => showToast(successMsg))
        .catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast(currentLang === 'en' ? 'Copy failed!' : 'Không thể sao chép!');
    }
    document.body.removeChild(textArea);
  }

  const copyElements = document.querySelectorAll('.copyable, .copy-email-btn');
  copyElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = el.getAttribute('data-copy') || 'danganhquan0908@gmail.com';
      copyTextToClipboard(textToCopy);
    });
  });

  // --------------------------------------------------------------------------
  // 7. ACTIVE NAV LINK ON SCROLL
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 130;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();

  // --------------------------------------------------------------------------
  // 8. BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
