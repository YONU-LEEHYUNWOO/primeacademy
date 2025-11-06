// 지원하는 로케일 목록
export const locales = ["ko", "en"];

// 기본 로케일
export const defaultLocale = "ko";

// 로컬스토리지 키
const LOCALE_STORAGE_KEY = "app_locale";

// 번역 데이터
export const translations = {
  ko: {
    // 공통
    welcome: "환영합니다",
    hello: "안녕하세요",
    change_language: "언어 변경",
    description: "Next.js 다국어 지원 예시입니다",
    current_locale: "현재 언어",
    
    // Header
    academy_name: "프라임 수학학원",
    menu_results: "성과 및 통계",
    menu_teachers: "강사진",
    menu_difference: "차별점",
    menu_about: "학원 소개",
    menu_location: "오시는 길",
    menu_reservation: "상담 예약하기",
    menu_open: "메뉴 열기",
    
    // Footer
    footer_tagline: "성적 향상의 중심에서 함께하는 교육 여정",
    footer_contact: "연락처",
    footer_info: "정보",
    footer_privacy: "개인정보 처리방침",
    footer_terms: "이용약관",
    footer_disclaimer: "입력된 정보는 상담 목적 외 사용되지 않습니다.",
    footer_copyright: "© 2025 프라임 수학학원. All rights reserved.",
    
    // Hero Section
    hero_title: "성적 향상의 중심",
    hero_subtitle: "프라임 수학학원",
    hero_description: "데이터 기반 성과 공개와 검증된 강사진으로\n자녀의 수학 실력을 한 단계 높여드립니다",
    hero_reservation: "상담 예약하기",
    hero_about: "학원 소개",
    
    // About Section
    about_title: "프라임 수학학원의 교육 철학",
    about_subtitle: "단순한 문제 풀이가 아닌, 수학적 사고력과 문제 해결 능력을 기르는 교육을 지향합니다",
    about_believe: "우리는 믿습니다",
    about_believe_text1: "모든 학생은 자신만의 학습 속도와 방법이 있습니다. 프라임 수학학원은 각 학생의 특성을 깊이 이해하고, 개인별 맞춤형 학습 계획을 통해 최적의 성과를 이끌어냅니다.",
    about_believe_text2: "단기적인 성적 향상뿐만 아니라, 장기적인 학습 능력과 수학적 사고력을 기르는 것을 목표로 합니다. 이를 통해 학생들이 스스로 문제를 해결할 수 있는 힘을 키워갑니다.",
    about_feature1_title: "체계적인 커리큘럼",
    about_feature1_desc: "개인별 수준에 맞춘 맞춤형 학습 프로그램으로 체계적인 실력 향상을 보장합니다.",
    about_feature2_title: "명확한 목표 설정",
    about_feature2_desc: "학생별 목표를 정확히 설정하고 달성까지 단계별로 관리합니다.",
    about_feature3_title: "전문 강사진",
    about_feature3_desc: "풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다.",
    
    // Stats Section
    stats_title: "객관적인 성과로 증명합니다",
    stats_subtitle: "데이터로 확인하는 프라임 수학학원의 검증된 성과",
    stats_improvement: "성적 향상률",
    stats_improvement_desc: "평균 성적 향상률",
    stats_pass_rate: "합격률",
    stats_pass_rate_desc: "목표 학교 합격률",
    stats_students: "누적 학생",
    stats_students_desc: "지금까지 교육한 학생 수",
    stats_average: "평균 성적",
    stats_average_desc: "내신 평균 성적",
    stats_disclaimer: "* 통계는 2024년 기준 실제 데이터를 반영한 수치입니다.\n개인별 결과는 다를 수 있으며, 지속적인 관리를 통해 최적의 성과를 도출합니다.",
    
    // Differentiation Section
    diff_title: "프라임 수학학원의 차별점",
    diff_subtitle: "단순한 학원이 아닌, 학습 성과를 체계적으로 관리하는 전문 교육 기관",
    diff_custom_title: "맞춤형 커리큘럼",
    diff_custom_desc: "학생별 수준과 목표에 맞춘 개인별 학습 계획을 수립하고, 단계별로 관리합니다.",
    diff_group_title: "소규모 그룹 수업",
    diff_group_desc: "과목별로 소규모 그룹을 구성하여 집중도 높은 수업과 개별 관리를 동시에 실현합니다.",
    diff_management_title: "체계적인 학습 관리",
    diff_management_desc: "정기적인 평가와 피드백을 통해 학습 상태를 모니터링하고 지속적으로 개선합니다.",
    diff_method_title: "검증된 학습 방법",
    diff_method_desc: "오랜 기간 검증된 학습 방법론을 바탕으로 체계적이고 효율적인 학습을 제공합니다.",
    diff_modal_subtitle: "프라임 수학학원의 차별화된 교육 시스템",
    diff_modal_overview: "개요",
    diff_modal_details: "상세 설명",
    diff_modal_features: "주요 특징",
    diff_modal_benefits: "기대 효과",
    
    // Teachers Section
    teachers_title: "전문 강사진을 소개합니다",
    teachers_subtitle: "풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다",
    teachers_more: "강사진 더 보기",
    teacher_role_main: "수학 대표 강사",
    teacher_role_high: "고등 수학 전문",
    teacher_role_middle: "중등 수학 전문",
    teacher_role_suneung: "수능 수학 전문",
    teacher_role_neisun: "내신 수학 전문",
    teacher_role_basic: "기초 수학 전문",
    
    // Reservation CTA Section
    cta_title: "자녀에게 맞는 학습 상담을 받아보세요",
    cta_description: "프라임 수학학원의 전문 상담사가 자녀의 학습 상황을 분석하고\n최적의 학습 방법을 제안해드립니다",
    cta_reservation: "상담 예약하기",
    cta_location: "오시는 길",
    
    // About Page
    about_page_title: "프라임 수학학원에 오신 것을 환영합니다",
    about_page_subtitle: "단순한 문제 풀이가 아닌, 수학적 사고력과 문제 해결 능력을 기르는 교육을 지향합니다",
    about_page_philosophy_title: "우리의 교육 철학",
    about_page_values_title: "우리의 핵심 가치",
    about_page_values_subtitle: "프라임 수학학원이 추구하는 교육의 핵심 가치입니다",
    about_page_curriculum_title: "체계적인 커리큘럼 구성",
    about_page_curriculum_desc: "프라임 수학학원은 학생별 수준과 목표에 맞춘 체계적인 커리큘럼을 제공합니다.",
    about_page_start_title: "지금 바로 시작하세요",
    about_page_start_desc: "프라임 수학학원과 함께 자녀의 수학 실력을 한 단계 높여보세요",
    
    // Results Page
    results_page_title: "객관적인 성과로 증명합니다",
    results_page_subtitle: "데이터로 확인하는 프라임 수학학원의 검증된 성과",
    results_trend_title: "학습 기간별 성적 향상 추이",
    results_trend_subtitle: "체계적인 학습 관리로 지속적인 성과 향상을 보장합니다",
    results_comparison_title: "타 학원 대비 비교",
    results_comparison_subtitle: "프라임 수학학원의 차별화된 성과를 확인하세요",
    results_stories_title: "성공 사례",
    results_stories_subtitle: "프라임 수학학원과 함께 성장한 학생들의 이야기",
    results_cta_title: "이제 여러분의 차례입니다",
    results_cta_desc: "프라임 수학학원과 함께 자녀의 수학 실력을 향상시켜보세요",
    
    // Teachers Page
    teachers_page_title: "전문 강사진을 소개합니다",
    teachers_page_subtitle: "풍부한 경력과 검증된 실력을 갖춘 전문 강사진이 책임지고 지도합니다",
    teachers_page_features_title: "프라임 수학학원의 수업 특징",
    teachers_page_features_subtitle: "전문 강사진이 제공하는 차별화된 수업 방식",
    teachers_page_capability_title: "검증된 강사진의 역량",
    teachers_page_capability_desc: "프라임 수학학원의 강사진은 모두 검증된 경력과 실력을 갖추고 있으며, 지속적인 교육을 통해 최신 교수법과 입시 동향을 습득합니다.",
    teachers_page_cta_title: "전문 강사진과 함께 시작하세요",
    teachers_page_cta_desc: "프라임 수학학원의 전문 강사진이 자녀의 수학 실력을 향상시켜드립니다",
    
    // Difference Page
    difference_page_title: "프라임 수학학원의 차별점",
    difference_page_subtitle: "단순한 학원이 아닌, 학습 성과를 체계적으로 관리하는 전문 교육 기관",
    difference_comparison_title: "타 학원과의 차이점",
    difference_comparison_subtitle: "프라임 수학학원만의 독특한 학습 관리 시스템",
    difference_features_title: "프라임 수학학원의 추가 특징",
    difference_features_subtitle: "학생과 학부모를 위한 다양한 혜택을 제공합니다",
    difference_process_title: "체계적인 학습 프로세스",
    difference_process_subtitle: "프라임 수학학원의 단계별 학습 관리 시스템",
    difference_cta_title: "차별화된 교육을 경험하세요",
    difference_cta_desc: "프라임 수학학원의 체계적인 학습 관리 시스템으로 자녀의 수학 실력을 향상시켜보세요",
    
    // Location Page
    location_page_title: "오시는 길",
    location_page_subtitle: "프라임 수학학원으로 오시는 길을 안내해드립니다",
    location_address: "주소",
    location_phone: "전화",
    location_email: "이메일",
    location_hours: "운영시간",
    location_transport_title: "교통편 안내",
    location_transport_subtitle: "대중교통을 이용하여 오시는 방법을 안내해드립니다",
    location_nearby_title: "주변 정보",
    location_nearby_subtitle: "편리한 접근성과 쾌적한 학습 환경을 제공합니다",
    location_naver_map: "네이버 지도로 보기",
    location_kakao_map: "카카오맵으로 보기",
    location_call: "전화하기",
    location_cta_title: "방문 상담을 예약하세요",
    location_cta_desc: "프라임 수학학원으로 직접 오셔서 학원을 둘러보시고 상담받으실 수 있습니다",
    
    // Reservation Page
    reservation_page_title: "상담 예약하기",
    reservation_page_subtitle: "프라임 수학학원에서 자녀에게 맞는 학습 상담을 받아보세요",
    reservation_form_name: "이름 *",
    reservation_form_name_placeholder: "이름을 입력해주세요",
    reservation_form_phone: "연락처 *",
    reservation_form_phone_placeholder: "010-1234-5678",
    reservation_form_phone_desc: "담당자가 연락드릴 수 있도록 정확한 번호를 입력해주세요.",
    reservation_form_date: "상담 희망일 *",
    reservation_form_date_placeholder: "희망일을 선택해주세요",
    reservation_form_time: "상담 희망 시간 *",
    reservation_form_time_placeholder: "희망 시간을 선택해주세요",
    reservation_form_message: "문의내용 *",
    reservation_form_message_placeholder: "상담 받고 싶은 내용을 자세히 입력해주세요 (예: 자녀의 현재 수준, 목표, 특별한 요청사항 등)",
    reservation_form_message_desc: "자세한 문의내용을 입력해주시면 더 정확한 상담을 받으실 수 있습니다.",
    reservation_privacy_title: "개인정보 수집 및 이용 안내",
    reservation_privacy_text: "입력하신 정보는 상담 목적 외에는 사용되지 않으며, 상담 완료 후 삭제됩니다.",
    reservation_submit: "상담 신청하기",
    reservation_submitting: "전송 중...",
    reservation_success_title: "상담 신청이 완료되었습니다",
    reservation_success_desc: "담당자가 입력하신 연락처로 연락드리겠습니다.\n평일 오후 2시부터 10시까지 운영됩니다.",
    reservation_reset: "다시 작성하기",
    reservation_contact_title: "다른 방법으로 연락하기",
    reservation_contact_subtitle: "폼 제출이 어려우시다면 아래 방법으로도 연락 가능합니다",
    reservation_contact_phone: "전화 상담",
    reservation_contact_email: "이메일 문의",
    reservation_contact_hours: "운영시간",
    reservation_contact_hours_24: "24시간 접수 가능",
    
    // Common form options
    form_option_weekday: "평일 (월-금)",
    form_option_saturday: "토요일",
    form_option_flexible: "상관없음",
    form_option_morning: "오전 (10:00 - 12:00)",
    form_option_afternoon: "오후 (14:00 - 17:00)",
    form_option_evening: "저녁 (18:00 - 22:00)",
    
    // Validation messages
    validation_name_min: "이름은 2자 이상 입력해주세요.",
    validation_name_max: "이름은 50자 이하로 입력해주세요.",
    validation_phone_min: "연락처를 올바르게 입력해주세요.",
    validation_phone_format: "연락처는 숫자와 하이픈(-)만 입력 가능합니다.",
    validation_date_required: "상담 희망일을 선택해주세요.",
    validation_time_required: "상담 희망 시간을 선택해주세요.",
    validation_message_min: "문의내용을 10자 이상 입력해주세요.",
    validation_message_max: "문의내용은 500자 이하로 입력해주세요.",
    
    // Toast messages
    toast_success_title: "상담 신청이 완료되었습니다",
    toast_success_desc: "담당자가 연락드리겠습니다.",
    toast_error_title: "전송 실패",
    toast_error_desc: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
  },
  en: {
    // Common
    welcome: "Welcome",
    hello: "Hello",
    change_language: "Change Language",
    description: "Next.js i18n example",
    current_locale: "Current locale",
    
    // Header
    academy_name: "Prime Math Academy",
    menu_results: "Results & Statistics",
    menu_teachers: "Teachers",
    menu_difference: "Difference",
    menu_about: "About",
    menu_location: "Location",
    menu_reservation: "Book Consultation",
    menu_open: "Open menu",
    
    // Footer
    footer_tagline: "Your educational journey at the center of academic improvement",
    footer_contact: "Contact",
    footer_info: "Information",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_disclaimer: "Information entered is used only for consultation purposes.",
    footer_copyright: "© 2025 Prime Math Academy. All rights reserved.",
    
    // Hero Section
    hero_title: "At the Center of",
    hero_subtitle: "Academic Improvement",
    hero_description: "We elevate your child's math skills with data-driven results and verified instructors",
    hero_reservation: "Book Consultation",
    hero_about: "About Us",
    
    // About Section
    about_title: "Prime Math Academy's Educational Philosophy",
    about_subtitle: "We aim to develop mathematical thinking and problem-solving skills, not just solve problems",
    about_believe: "We Believe",
    about_believe_text1: "Every student has their own learning pace and method. Prime Math Academy deeply understands each student's characteristics and achieves optimal results through personalized learning plans.",
    about_believe_text2: "Our goal is not only short-term grade improvement but also long-term learning ability and mathematical thinking. This helps students develop the power to solve problems on their own.",
    about_feature1_title: "Systematic Curriculum",
    about_feature1_desc: "Personalized learning programs tailored to each student's level ensure systematic skill improvement.",
    about_feature2_title: "Clear Goal Setting",
    about_feature2_desc: "We accurately set goals for each student and manage them step by step until achievement.",
    about_feature3_title: "Expert Instructors",
    about_feature3_desc: "Professional instructors with rich experience and verified skills take responsibility for guidance.",
    
    // Stats Section
    stats_title: "Proven by Objective Results",
    stats_subtitle: "Verified results of Prime Math Academy confirmed by data",
    stats_improvement: "Improvement Rate",
    stats_improvement_desc: "Average grade improvement rate",
    stats_pass_rate: "Pass Rate",
    stats_pass_rate_desc: "Target school acceptance rate",
    stats_students: "Total Students",
    stats_students_desc: "Number of students educated so far",
    stats_average: "Average Grade",
    stats_average_desc: "Average school grade",
    stats_disclaimer: "* Statistics reflect actual data as of 2024.\nIndividual results may vary, and optimal results are achieved through continuous management.",
    
    // Differentiation Section
    diff_title: "Prime Math Academy's Differentiators",
    diff_subtitle: "A professional educational institution that systematically manages learning outcomes, not just a simple academy",
    diff_custom_title: "Customized Curriculum",
    diff_custom_desc: "We establish personalized learning plans tailored to each student's level and goals, and manage them step by step.",
    diff_group_title: "Small Group Classes",
    diff_group_desc: "We organize small groups by subject to achieve both focused classes and individual management simultaneously.",
    diff_management_title: "Systematic Learning Management",
    diff_management_desc: "We monitor learning status through regular evaluations and feedback, and continuously improve.",
    diff_method_title: "Verified Learning Methods",
    diff_method_desc: "We provide systematic and efficient learning based on proven learning methodologies over a long period.",
    diff_modal_subtitle: "Prime Math Academy's differentiated educational system",
    diff_modal_overview: "Overview",
    diff_modal_details: "Detailed Description",
    diff_modal_features: "Key Features",
    diff_modal_benefits: "Expected Benefits",
    
    // Teachers Section
    teachers_title: "Meet Our Expert Instructors",
    teachers_subtitle: "Professional instructors with rich experience and verified skills take responsibility for guidance",
    teachers_more: "View More Teachers",
    teacher_role_main: "Head Math Instructor",
    teacher_role_high: "High School Math Specialist",
    teacher_role_middle: "Middle School Math Specialist",
    teacher_role_suneung: "CSAT Math Specialist",
    teacher_role_neisun: "School Exam Specialist",
    teacher_role_basic: "Basic Math Specialist",
    
    // Reservation CTA Section
    cta_title: "Get a Learning Consultation Tailored to Your Child",
    cta_description: "Prime Math Academy's professional counselors analyze your child's learning situation\nand suggest the optimal learning method",
    cta_reservation: "Book Consultation",
    cta_location: "Location",
    
    // About Page
    about_page_title: "Welcome to Prime Math Academy",
    about_page_subtitle: "We aim to develop mathematical thinking and problem-solving skills, not just solve problems",
    about_page_philosophy_title: "Our Educational Philosophy",
    about_page_values_title: "Our Core Values",
    about_page_values_subtitle: "The core values of education pursued by Prime Math Academy",
    about_page_curriculum_title: "Systematic Curriculum Structure",
    about_page_curriculum_desc: "Prime Math Academy provides systematic curricula tailored to each student's level and goals.",
    about_page_start_title: "Start Now",
    about_page_start_desc: "Take your child's math skills to the next level with Prime Math Academy",
    
    // Results Page
    results_page_title: "Proven by Objective Results",
    results_page_subtitle: "Verified results of Prime Math Academy confirmed by data",
    results_trend_title: "Grade Improvement Trend by Learning Period",
    results_trend_subtitle: "Continuous performance improvement guaranteed through systematic learning management",
    results_comparison_title: "Comparison with Other Academies",
    results_comparison_subtitle: "Check Prime Math Academy's differentiated results",
    results_stories_title: "Success Stories",
    results_stories_subtitle: "Stories of students who grew with Prime Math Academy",
    results_cta_title: "Now It's Your Turn",
    results_cta_desc: "Improve your child's math skills with Prime Math Academy",
    
    // Teachers Page
    teachers_page_title: "Meet Our Expert Instructors",
    teachers_page_subtitle: "Professional instructors with rich experience and verified skills take responsibility for guidance",
    teachers_page_features_title: "Prime Math Academy's Class Features",
    teachers_page_features_subtitle: "Differentiated teaching methods provided by expert instructors",
    teachers_page_capability_title: "Verified Instructor Capabilities",
    teachers_page_capability_desc: "All instructors at Prime Math Academy have verified experience and skills, and continuously learn the latest teaching methods and entrance exam trends through ongoing education.",
    teachers_page_cta_title: "Start with Expert Instructors",
    teachers_page_cta_desc: "Prime Math Academy's expert instructors will improve your child's math skills",
    
    // Difference Page
    difference_page_title: "Prime Math Academy's Differentiators",
    difference_page_subtitle: "A professional educational institution that systematically manages learning outcomes, not just a simple academy",
    difference_comparison_title: "Differences from Other Academies",
    difference_comparison_subtitle: "Prime Math Academy's unique learning management system",
    difference_features_title: "Additional Features of Prime Math Academy",
    difference_features_subtitle: "We provide various benefits for students and parents",
    difference_process_title: "Systematic Learning Process",
    difference_process_subtitle: "Prime Math Academy's step-by-step learning management system",
    difference_cta_title: "Experience Differentiated Education",
    difference_cta_desc: "Improve your child's math skills with Prime Math Academy's systematic learning management system",
    
    // Location Page
    location_page_title: "Location",
    location_page_subtitle: "Directions to Prime Math Academy",
    location_address: "Address",
    location_phone: "Phone",
    location_email: "Email",
    location_hours: "Operating Hours",
    location_transport_title: "Transportation Guide",
    location_transport_subtitle: "How to get here by public transportation",
    location_nearby_title: "Nearby Information",
    location_nearby_subtitle: "We provide convenient access and a pleasant learning environment",
    location_naver_map: "View on Naver Map",
    location_kakao_map: "View on Kakao Map",
    location_call: "Call",
    location_cta_title: "Book a Visit Consultation",
    location_cta_desc: "You can visit Prime Math Academy directly, tour the academy, and receive consultation",
    
    // Reservation Page
    reservation_page_title: "Book Consultation",
    reservation_page_subtitle: "Get a learning consultation tailored to your child at Prime Math Academy",
    reservation_form_name: "Name *",
    reservation_form_name_placeholder: "Please enter your name",
    reservation_form_phone: "Phone *",
    reservation_form_phone_placeholder: "010-1234-5678",
    reservation_form_phone_desc: "Please enter the correct number so we can contact you.",
    reservation_form_date: "Preferred Date *",
    reservation_form_date_placeholder: "Please select preferred date",
    reservation_form_time: "Preferred Time *",
    reservation_form_time_placeholder: "Please select preferred time",
    reservation_form_message: "Inquiry *",
    reservation_form_message_placeholder: "Please enter details about what you want to consult (e.g., your child's current level, goals, special requests, etc.)",
    reservation_form_message_desc: "Entering detailed inquiries will allow you to receive more accurate consultation.",
    reservation_privacy_title: "Privacy Collection and Use Notice",
    reservation_privacy_text: "The information you enter will not be used for purposes other than consultation and will be deleted after consultation is completed.",
    reservation_submit: "Submit Consultation Request",
    reservation_submitting: "Submitting...",
    reservation_success_title: "Consultation Request Completed",
    reservation_success_desc: "A staff member will contact you at the number you provided.\nWe operate from 2 PM to 10 PM on weekdays.",
    reservation_reset: "Write Again",
    reservation_contact_title: "Contact Us Another Way",
    reservation_contact_subtitle: "If you have difficulty submitting the form, you can also contact us using the methods below",
    reservation_contact_phone: "Phone Consultation",
    reservation_contact_email: "Email Inquiry",
    reservation_contact_hours: "Operating Hours",
    reservation_contact_hours_24: "Available 24 hours",
    
    // Common form options
    form_option_weekday: "Weekday (Mon-Fri)",
    form_option_saturday: "Saturday",
    form_option_flexible: "Flexible",
    form_option_morning: "Morning (10:00 - 12:00)",
    form_option_afternoon: "Afternoon (14:00 - 17:00)",
    form_option_evening: "Evening (18:00 - 22:00)",
    
    // Validation messages
    validation_name_min: "Please enter at least 2 characters for name.",
    validation_name_max: "Please enter name with 50 characters or less.",
    validation_phone_min: "Please enter phone number correctly.",
    validation_phone_format: "Phone number can only contain numbers and hyphens (-).",
    validation_date_required: "Please select preferred consultation date.",
    validation_time_required: "Please select preferred consultation time.",
    validation_message_min: "Please enter inquiry with at least 10 characters.",
    validation_message_max: "Please enter inquiry with 500 characters or less.",
    
    // Toast messages
    toast_success_title: "Consultation Request Completed",
    toast_success_desc: "A staff member will contact you.",
    toast_error_title: "Submission Failed",
    toast_error_desc: "A server error occurred. Please try again later.",
  },
};

export type Locale = keyof typeof translations;

// 현재 로케일 가져오기 (클라이언트 사이드)
export function getClientLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale as Locale;
  }

  // 로컬스토리지에서 로케일 가져오기
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

  // 저장된 로케일이 유효한지 확인
  if (storedLocale && locales.includes(storedLocale)) {
    return storedLocale as Locale;
  }

  // 저장된 로케일이 없거나 유효하지 않은 경우 기본 로케일 반환
  return defaultLocale as Locale;
}

// 로케일 설정 (클라이언트 사이드)
export function setClientLocale(locale: Locale): void {
  if (typeof window === "undefined") {
    return;
  }

  // 로컬스토리지에 로케일 저장
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

// 번역 함수
export function translate(
  key: keyof typeof translations.ko,
  locale: Locale = getClientLocale()
): string {
  return translations[locale][key] || key;
}

// 쿠키에서 로케일 가져오기 (서버 사이드)
export function getLocaleFromCookie(cookie: string): Locale {
  const match = cookie.match(new RegExp(`${LOCALE_STORAGE_KEY}=([^;]+)`));
  const locale = match ? match[1] : defaultLocale;
  return (locales.includes(locale) ? locale : defaultLocale) as Locale;
}
