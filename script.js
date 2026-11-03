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
      hero_bio: 'Lập trình viên trẻ đầy nhiệt huyết, định hướng phát triển chuyên sâu mảng .NET/C# và hệ thống cơ sở dữ liệu SQL Server. Sở hữu tư duy giải quyết vấn đề logic, kỹ năng phân tích yêu cầu bài bản cùng tinh thần cầu tiến, không ngại thử thách và luôn sẵn sàng làm chủ các công nghệ mới.',
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
      proj_live_tag: 'LIVE DEMO TRỰC TIẾP',
      proj_live_notice: '<strong>Trải nghiệm ứng dụng thực tế:</strong> Bạn có thể tương tác trực tiếp trên khung web bên dưới: Đăng nhập nội bộ (tài khoản đã điền sẵn), Tạo & Quản lý hợp đồng gửi xe, Đổi xe, Tra cứu & Lọc trạng thái, Xem lịch sử và Chuyển giao diện Sáng / Tối.',
      proj_source_btn: 'Mã nguồn GitHub',
      proj_readme_btn: 'Tài liệu README.md',
      proj_name: 'Monthly Parking System (MPS) - MPS Residence',
      proj_subtitle: 'Hệ thống Quản lý Bãi đỗ xe Ký túc xá Thông minh, Đa trường (Multi-Tenant) & Tự động hóa gửi Email',
      proj_zoom_hint: 'Nhấn để xem kích thước lớn',
      thumb_dashboard: '1. Dashboard Quản lý',
      thumb_login: '2. Đăng nhập phân quyền',
      thumb_modal: '3. Tạo hợp đồng gửi xe',
      readme_heading: 'Tài Liệu Dự Án Chi Tiết (README.md)',
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
      proj_tech_1: '<strong>Kiến trúc & Lập trình:</strong> Áp dụng kiến trúc đa trường (Multi-tenant) trên ASP.NET Core (.NET 10) & Vue 3.5, đóng gói Single-host tối ưu hiệu năng và khả năng mở rộng.',
      proj_tech_2: '<strong>Cơ sở dữ liệu & Bảo mật:</strong> Chuẩn hóa SQL Server với migration scripts, mã hóa số điện thoại tầng ứng dụng bằng khóa AES-GCM 32 byte và xác thực JWT Bearer.',
      proj_tech_3: '<strong>Tự động hóa & Kiểm thử:</strong> Background services quét hạn gửi email qua SMTP hàng ngày kết hợp Polly retry; kiểm thử tự động xUnit toàn diện các quy tắc nghiệp vụ.',
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
      contact_phone_label: 'Số điện thoại:',
      contact_call_btn: 'Gọi ngay',
      contact_send_btn: 'Gửi thư',
      contact_email_label: 'Hộp thư điện tử:',
      contact_copy_btn: 'Sao chép',
      contact_fb_label: 'Facebook Cá Nhân:',
      contact_fb_btn: 'Kết nối &rarr;',
      contact_tiktok_label: 'Kênh TikTok:',
      contact_tiktok_btn: 'Xem kênh &rarr;',
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
      hero_bio: 'An energetic and passionate software developer specializing in .NET/C# and Microsoft SQL Server. Possesses a logical problem-solving mindset, methodical requirements analysis skills, a strong growth orientation, resilience facing challenges, and eagerness to master emerging technologies.',
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
      proj_live_tag: 'INTERACTIVE LIVE DEMO',
      proj_live_notice: '<strong>Interactive Live Experience:</strong> You can interact directly with the embedded app below: Internal login (prefilled), create & manage parking contracts, change vehicle, search & filter statuses, view history audit, and toggle Light/Dark themes.',
      proj_source_btn: 'GitHub Repository',
      proj_readme_btn: 'Technical README.md',
      proj_name: 'Monthly Parking System (MPS) - MPS Residence',
      proj_subtitle: 'Smart Multi-Tenant Dormitory Parking Management System & Automated Email Notifications',
      proj_zoom_hint: 'Click to view full size',
      thumb_dashboard: '1. Management Dashboard',
      thumb_login: '2. Role-based Login',
      thumb_modal: '3. New Contract Form',
      readme_heading: 'Technical Project Documentation (README.md)',
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
      proj_tech_1: '<strong>Architecture:</strong> Multi-tenant architecture on ASP.NET Core (.NET 10) & Vue 3.5, single-host deployment optimizing performance and scalability.',
      proj_tech_2: '<strong>Database & Security:</strong> Normalized SQL Server with migration scripts, application-layer phone encryption with AES-GCM 32-byte key, and JWT Bearer auth.',
      proj_tech_3: '<strong>Automation & Testing:</strong> Daily automated expiration scanning with SMTP notifications and Polly retry; comprehensive xUnit automated testing suite.',
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
      contact_phone_label: 'Phone Number:',
      contact_call_btn: 'Call',
      contact_send_btn: 'Email',
      contact_email_label: 'Email Address:',
      contact_copy_btn: 'Copy',
      contact_fb_label: 'Facebook Profile:',
      contact_fb_btn: 'Connect &rarr;',
      contact_tiktok_label: 'TikTok Channel:',
      contact_tiktok_btn: 'View &rarr;',
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

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const updateThemeMeta = (theme) => {
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0d0906' : '#faf7f2');
    }
  };
  updateThemeMeta(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme');
      const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('cv_theme', targetTheme);
      updateThemeMeta(targetTheme);
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
    let successMsg = currentLang === 'en' ? `Copied: ${text}` : `Đã sao chép: ${text}`;
    if (text.includes('@')) {
      successMsg = currentLang === 'en' ? `Copied email: ${text}` : `Đã sao chép email: ${text}`;
    } else if (text.startsWith('+') || /^[0-9\s-]+$/.test(text)) {
      successMsg = currentLang === 'en' ? `Copied phone: ${text}` : `Đã sao chép số điện thoại: ${text}`;
    }

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

  const copyElements = document.querySelectorAll('.copyable, .copy-email-btn, .copy-phone-btn, [data-copy]');
  copyElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = el.getAttribute('data-copy') || 'danganhquan0908@gmail.com';
      copyTextToClipboard(textToCopy);
    });
  });

  // --------------------------------------------------------------------------
  // 7. PROJECT SCREENSHOT GALLERY & LIGHTBOX
  // --------------------------------------------------------------------------
  const galleryMainImg = document.getElementById('galleryMainImg');
  const galleryTitleBar = document.getElementById('galleryTitleBar');
  const galleryViewport = document.getElementById('galleryViewport');
  const thumbButtons = document.querySelectorAll('.thumb-btn');

  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  if (galleryMainImg && thumbButtons.length > 0) {
    thumbButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        const title = btn.getAttribute('data-title');

        // Transition image
        galleryMainImg.style.opacity = '0';
        setTimeout(() => {
          galleryMainImg.src = src;
          galleryMainImg.style.opacity = '1';
        }, 150);

        if (galleryTitleBar && title) {
          galleryTitleBar.textContent = title;
        }

        thumbButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  function openLightbox(src, title) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src || (galleryMainImg ? galleryMainImg.src : '');
    if (lightboxCaption) {
      lightboxCaption.textContent = title || (galleryTitleBar ? galleryTitleBar.textContent : 'MPS Residence');
    }
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (galleryViewport) {
    galleryViewport.addEventListener('click', () => {
      if (galleryMainImg) {
        openLightbox(galleryMainImg.src, galleryTitleBar ? galleryTitleBar.textContent : '');
      }
    });
  }

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Live App vs Screenshots Mode Switcher
  const btnModeLive = document.getElementById('btnModeLive');
  const btnModeScreenshots = document.getElementById('btnModeScreenshots');
  const liveAppContainer = document.getElementById('liveAppContainer');
  const screenshotsContainer = document.getElementById('screenshotsContainer');

  if (btnModeLive && btnModeScreenshots && liveAppContainer && screenshotsContainer) {
    btnModeLive.addEventListener('click', () => {
      btnModeLive.classList.add('active');
      btnModeScreenshots.classList.remove('active');
      liveAppContainer.style.display = 'block';
      screenshotsContainer.style.display = 'none';
      if (galleryTitleBar) {
        galleryTitleBar.textContent = currentLang === 'en'
          ? 'MPS Residence - Live Web Application (Interactive)'
          : 'MPS Residence - Ứng Dụng Quản Lý Xe (Live Demo)';
      }
    });

    btnModeScreenshots.addEventListener('click', () => {
      btnModeScreenshots.classList.add('active');
      btnModeLive.classList.remove('active');
      liveAppContainer.style.display = 'none';
      screenshotsContainer.style.display = 'block';
      if (galleryTitleBar) {
        galleryTitleBar.textContent = currentLang === 'en'
          ? 'MPS Residence - Screenshots Gallery'
          : 'MPS Residence - Thư viện ảnh chụp màn hình';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. PROJECT README DRAWER TOGGLE
  // --------------------------------------------------------------------------
  const toggleReadmeBtn = document.getElementById('toggleReadmeBtn');
  const projectReadmeContainer = document.getElementById('projectReadmeContainer');
  const closeReadmeBtn = document.getElementById('closeReadmeBtn');

  if (toggleReadmeBtn && projectReadmeContainer) {
    toggleReadmeBtn.addEventListener('click', () => {
      projectReadmeContainer.classList.toggle('open');
      if (projectReadmeContainer.classList.contains('open')) {
        projectReadmeContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  if (closeReadmeBtn && projectReadmeContainer) {
    closeReadmeBtn.addEventListener('click', () => {
      projectReadmeContainer.classList.remove('open');
    });
  }

  // --------------------------------------------------------------------------
  // 9. ACTIVE NAV LINK ON SCROLL
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
  // 10. BACK TO TOP BUTTON
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
