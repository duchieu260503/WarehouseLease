const property = {
  name: 'Factory Complex for Lease',
  location: 'Lot CN 42.1, Thuan Thanh II Industrial Park, Bac Ninh, Vietnam',
  totalArea: 15260,
  blocks: 2,
  power: 4000,
  elevator: 5,
  groundLoad: 3,
  officeArea: 650,
  factoryArea: 6980,
  factoryPrice: 4.5,
  officePrice: 5.5,
  hotline: '+84 974 068 688',
  hotlineHref: 'tel:+84974068688',
  contactName: 'Mr. Cuong',
  emailPlaceholder: 'info@thuantanhfactory.vn',
  brochurePath: 'brochure/factory-brochure.pdf',
  gallery: [
    '1/Enscape_2021-08-28-10-48-11.jpg',
    '1/b.jpg',
    '1/a.jpg',
    '1/Enscape_2021-08-28-10-52-36.jpg',
    '1/Enscape_2021-08-28-10-55-49.jpg',
    '1/Enscape_2021-08-28-10-59-22.jpg'
  ],
  specifications: [
    { label: 'Factory floor area', value: '6,980 m² per block' },
    { label: 'Office area', value: '650 m² per block' },
    { label: 'Floor heights', value: '7.9 m ground floor / 6 m second floor' },
    { label: 'Floor load capacity', value: '3 tons/m² ground / 1.5 tons/m² second' },
    { label: 'Elevator capacity', value: '5 tons' },
    { label: 'Power capacity', value: '4,000 KVA' }
  ]
};

const translations = {
  en: {
    meta: {
      title: 'Factory for Lease in Bac Ninh | Thuan Thanh II Industrial Park',
      description: 'Newly built 15,260 m² factory complex for lease in Thuan Thanh II Industrial Park, Bac Ninh, Vietnam. 4,000 KVA power capacity, modern industrial infrastructure, and direct leasing inquiries.',
      ogDescription: 'Newly built industrial facility with 15,260 m² total floor area, 4,000 KVA power capacity, and flexible two-block configuration in Bac Ninh, Vietnam.'
    },
    brand: { sub: 'Factory Complex' },
    nav: {
      about: 'Home',
      facility: 'Facility',
      location: 'Location',
      specifications: 'Specifications',
      gallery: 'Gallery',
      contact: 'Contact',
      requestDetails: 'REQUEST DETAILS'
    },
    hero: {
      eyebrow: 'NEWLY BUILT FACTORY COMPLEX FOR LEASE',
      title: 'FACTORY COMPLEX FOR LEASE',
      subtitle: 'THUAN THANH II INDUSTRIAL PARK\nBAC NINH, VIETNAM',
      meta: '15,260 m² TOTAL FLOOR AREA',
      blurb: 'Premium manufacturing and industrial space designed for businesses seeking a strategic location, modern infrastructure, and flexible production capacity.',
      request: 'REQUEST PROPERTY DETAILS',
      view: 'VIEW FACILITY',
      scroll: 'Scroll'
    },
    stats: {
      totalArea: 'TOTAL LEASING AREA (m²)',
      blocks: 'IDENTICAL 2-STOREY WAREHOUSES',
      power: 'kVA TOTAL POWER ACROSS 2 SUBSTATIONS',
      elevator: 'TONS ELEVATOR LOAD'
    },
    intro: {
      eyebrow: 'DIRECT LEASING INQUIRY',
      title: 'PRIME LOCATION IN THUAN THANH II INDUSTRIAL PARK',
      paragraph1: 'Lot CN 42.1, Thuan Thanh II Industrial Park, Bac Ninh, Vietnam.',
      paragraph2: 'Strategically positioned for manufacturing and industrial operations, with modern infrastructure and a disciplined production-oriented layout.',
      map: 'VIEW LOCATION ON MAP',
      mapAria: 'Map location of Thuan Thanh II industrial park in Bac Ninh',
      mapLot: 'Lot CN 42.1',
      mapPark: 'Thuan Thanh II Industrial Park',
      mapCity: 'Bac Ninh, Vietnam'
    },
    facility: {
      eyebrow: 'FACILITY OVERVIEW',
      title: 'TWO IDENTICAL TWO-STOREY WAREHOUSES',
      sub: 'One consistent layout across both buildings.',
      perBuilding: 'AREA PER BUILDING',
      factory: 'FACTORY',
      office: 'OFFICE'
    },
    interior: {
      eyebrow: 'FACTORY INTERIOR',
      title: 'ENGINEERED FOR PRODUCTION',
      caption1: 'GROUND FLOOR | 7.9 M HEIGHT | 3 TONS/m² FLOOR LOAD',
      caption2: 'SECOND FLOOR | 6 M HEIGHT | 1.5 TONS/m² FLOOR LOAD'
    },
    logistics: {
      eyebrow: 'LOGISTICS & MATERIAL HANDLING',
      title: 'BUILT FOR INDUSTRIAL OPERATIONS',
      item1: '5-TON INDUSTRIAL ELEVATOR',
      item2: '2ND FLOOR OVERSIZED MATERIAL ACCESS',
      item3: 'AUTOMATIC FIRE EXTINGUISHER SYSTEM'
    },
    support: {
      eyebrow: 'OFFICE & SUPPORT FACILITIES',
      title: 'DEDICATED OFFICE & FACTORY FACILITIES',
      item1: 'Separate restrooms',
      item2: 'Office space',
      item3: 'Waste storage',
      item4: 'Wastewater treatment'
    },
    gallery: {
      eyebrow: 'PHOTOGRAPHIC VIEW',
      title: 'PROPERTY GALLERY',
      tabFlycam: 'Fly Cam',
      tabWarehouse: 'Warehouse Interior',
      tabLogistics: 'Warehouse Exterior',
      tabSupport: 'Fire Extinguishers'
    },
    tech: {
      eyebrow: 'TECHNICAL INFORMATION',
      title: 'FACTORY FLOOR AREA & TECHNICAL SPECIFICATIONS',
      spec1Label: 'Factory floor area',
      spec1Value: '6,980 m² per block',
      spec2Label: 'Office area',
      spec2Value: '650 m² per block',
      spec3Label: 'Floor heights',
      spec3Value: '7.9 m ground floor / 6 m second floor',
      spec4Label: 'Floor load capacity',
      spec4Value: '3 tons/m² ground / 1.5 tons/m² second',
      spec5Label: 'Elevator capacity',
      spec5Value: '5 tons',
      spec6Label: 'Power capacity',
      spec6Value: '4,000 KVA',
      download: 'DOWNLOAD FULL PROPERTY BROCHURE'
    },
    contact: {
      eyebrow: 'DIRECT INQUIRY',
      title: 'LOOKING FOR YOUR NEXT PRODUCTION FACILITY?',
      description: 'Speak directly with our representative to arrange a site visit or request the full technical specification.',
      manager: 'MR. CUONG',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      zalo: 'Zalo',
      email: 'Email'
    },
    form: {
      company: 'Company Name',
      contact: 'Contact Person',
      country: 'Country',
      email: 'Email',
      phone: 'Phone',
      area: 'Required Factory Area',
      areaPlaceholder: 'e.g. 5,000 m²',
      date: 'Expected Move-in Date',
      message: 'Message',
      messagePlaceholder: 'Tell us about your production requirements.',
      submit: 'REQUEST A SITE VISIT'
    },
    footer: {
      tagline: 'Factory Leasing | Direct Inquiry',
      phoneLabel: 'Phone:',
      quickAccess: 'Quick access',
      location: 'Location',
      facility: 'Facility',
      operations: 'Operations',
      inquiry: 'Inquiry',
      directInquiry: 'Direct inquiry'
    }
  },
  vi: {
    meta: {
      title: 'Nhà xưởng cho thuê tại Bắc Ninh | Khu công nghiệp Thuận Thành II',
      description: 'Cho thuê nhà xưởng mới xây tại Khu công nghiệp Thuận Thành II, Bắc Ninh. Tổng diện tích 15.260 m², công suất điện 4.000 kVA, hạ tầng đồng bộ. Liên hệ trực tiếp để nhận thông tin chi tiết.',
      ogDescription: 'Nhà xưởng mới xây tại Bắc Ninh với tổng diện tích 15.260 m², công suất điện 4.000 kVA và hai khối nhà xưởng có thiết kế đồng bộ.'
    },
    brand: { sub: 'Cụm nhà máy' },
    nav: {
      about: 'Trang chủ',
      facility: 'Nhà xưởng',
      location: 'Vị trí',
      specifications: 'Thông số kỹ thuật',
      gallery: 'Hình ảnh',
      contact: 'Liên hệ',
      requestDetails: 'NHẬN THÔNG TIN'
    },
    hero: {
      eyebrow: 'NHÀ XƯỞNG MỚI XÂY, SẴN SÀNG CHO THUÊ',
      title: 'CHO THUÊ NHÀ XƯỞNG',
      subtitle: 'KHU CÔNG NGHIỆP THUẬN THÀNH II\nBẮC NINH, VIỆT NAM',
      meta: 'TỔNG DIỆN TÍCH CHO THUÊ 15.260 m²',
      blurb: 'Không gian sản xuất hiện đại tại vị trí thuận lợi, với hạ tầng đồng bộ và diện tích linh hoạt cho nhiều nhu cầu vận hành.',
      request: 'NHẬN THÔNG TIN NHÀ XƯỞNG',
      view: 'XEM NHÀ XƯỞNG',
      scroll: 'Cuộn xuống'
    },
    stats: {
      totalArea: 'DIỆN TÍCH CHO THUÊ (m²)',
      blocks: 'NHÀ XƯỞNG 2 TẦNG, THIẾT KẾ GIỐNG NHAU',
      power: 'TỔNG CÔNG SUẤT 2 TRẠM BIẾN ÁP (kVA)',
      elevator: 'TẢI TRỌNG THANG MÁY (TẤN)'
    },
    intro: {
      eyebrow: 'CHO THUÊ TRỰC TIẾP',
      title: 'VỊ TRÍ THUẬN LỢI TẠI KHU CÔNG NGHIỆP THUẬN THÀNH II',
      paragraph1: 'Lô CN 42.1, Khu công nghiệp Thuận Thành II, Bắc Ninh, Việt Nam.',
      paragraph2: 'Nằm trong khu công nghiệp có hạ tầng đồng bộ, phù hợp cho doanh nghiệp sản xuất và các hoạt động công nghiệp.',
      map: 'XEM VỊ TRÍ TRÊN BẢN ĐỒ',
      mapAria: 'Bản đồ vị trí Khu công nghiệp Thuận Thành II, Bắc Ninh',
      mapLot: 'Lô CN 42.1',
      mapPark: 'Khu công nghiệp Thuận Thành II',
      mapCity: 'Bắc Ninh, Việt Nam'
    },
    facility: {
      eyebrow: 'TỔNG QUAN CƠ SỞ',
      title: 'HAI NHÀ XƯỞNG 2 TẦNG CÓ THIẾT KẾ GIỐNG NHAU',
      sub: 'Mỗi nhà xưởng đều có khu sản xuất và khu văn phòng.',
      perBuilding: 'THÔNG TIN MỖI NHÀ XƯỞNG',
      factory: 'KHU NHÀ XƯỞNG',
      office: 'KHU VĂN PHÒNG'
    },
    interior: {
      eyebrow: 'KHÔNG GIAN BÊN TRONG',
      title: 'THIẾT KẾ ĐÁP ỨNG NHU CẦU SẢN XUẤT',
      caption1: 'TẦNG 1 | CAO 7,9 M | TẢI TRỌNG SÀN: 3 TẤN/m²',
      caption2: 'TẦNG 2 | CAO 6 M | TẢI TRỌNG SÀN: 1,5 TẤN/m²'
    },
    logistics: {
      eyebrow: 'VẬN CHUYỂN VÀ XỬ LÝ HÀNG HÓA',
      title: 'HẠ TẦNG PHỤC VỤ VẬN HÀNH',
      item1: 'THANG MÁY TẢI TRỌNG 5 TẤN',
      item2: 'LỐI VẬN CHUYỂN HÀNG HÓA LÊN TẦNG 2',
      item3: 'HỆ THỐNG CHỮA CHÁY TỰ ĐỘNG'
    },
    support: {
      eyebrow: 'VĂN PHÒNG VÀ TIỆN ÍCH',
      title: 'KHU VĂN PHÒNG VÀ CÁC HẠNG MỤC PHỤ TRỢ',
      item1: 'Khu vệ sinh riêng cho văn phòng và nhà xưởng',
      item2: 'Khu vực đỗ xe cho công nhân',
      item3: 'Khu nhà rác',
      item4: 'Hệ thống xử lý nước thải'
    },
    power: {
      eyebrow: 'ĐIỆN & HẠ TẦNG',
      title: 'HỆ THỐNG ĐIỆN VÀ HẠ TẦNG',
      total: 'TỔNG CÔNG SUẤT ĐIỆN',
      transformers: 'TRẠM BIẾN ÁP',
      fireLabel: 'PHÒNG CHÁY CHỮA CHÁY',
      fireSmall: 'HỆ THỐNG TỰ ĐỘNG',
      wastewaterLabel: 'XỬ LÝ NƯỚC THẢI',
      wastewaterSmall: 'HỆ THỐNG'
    },
    gallery: {
      eyebrow: 'HÌNH ẢNH THỰC TẾ',
      title: 'HÌNH ẢNH NHÀ XƯỞNG',
      tabFlycam: 'Video flycam',
      tabWarehouse: 'Bên trong nhà xưởng',
      tabLogistics: 'Mặt ngoài nhà xưởng',
      tabSupport: 'Bình chữa cháy'
    },
    tech: {
      eyebrow: 'THÔNG TIN KỸ THUẬT',
      title: 'DIỆN TÍCH VÀ THÔNG SỐ KỸ THUẬT NHÀ XƯỞNG',
      spec1Label: 'Diện tích nhà xưởng',
      spec1Value: '6.980 m²/nhà xưởng',
      spec2Label: 'Diện tích văn phòng',
      spec2Value: '650 m²/nhà xưởng',
      spec3Label: 'Chiều cao tầng',
      spec3Value: 'Tầng 1: 7,9 m | Tầng 2: 6 m',
      spec4Label: 'Tải trọng sàn',
      spec4Value: 'Tầng 1: 3 tấn/m² | Tầng 2: 1,5 tấn/m²',
      spec5Label: 'Tải trọng thang máy',
      spec5Value: '5 tấn',
      spec6Label: 'Công suất điện',
      spec6Value: '4.000 kVA (2 trạm biến áp)',
      download: 'TẢI HỒ SƠ GIỚI THIỆU NHÀ XƯỞNG'
    },
    lease: {
      eyebrow: 'ĐIỀU KIỆN THUÊ',
      title: 'ĐIỀU KIỆN THUÊ',
      factoryLabel: 'Nhà máy',
      officeLabel: 'Văn phòng',
      note: 'Liên hệ để kiểm tra tình trạng nhà xưởng, trao đổi điều kiện thuê hoặc đặt lịch tham quan.'
    },
    contact: {
      eyebrow: 'LIÊN HỆ TRỰC TIẾP',
      title: 'ĐANG TÌM NHÀ XƯỞNG CHO HOẠT ĐỘNG SẢN XUẤT?',
      description: 'Liên hệ trực tiếp với đại diện của chúng tôi để đặt lịch tham quan hoặc nhận hồ sơ thông số kỹ thuật.',
      manager: 'ANH CƯỜNG',
      phone: 'Điện thoại',
      whatsapp: 'WhatsApp',
      zalo: 'Zalo',
      email: 'Email'
    },
    form: {
      company: 'Tên công ty',
      contact: 'Người liên hệ',
      country: 'Quốc gia',
      email: 'Email',
      phone: 'Điện thoại',
      area: 'Diện tích nhà xưởng cần thuê',
      areaPlaceholder: 'vd: 5,000 m²',
      date: 'Thời gian dự kiến bắt đầu thuê',
      message: 'Tin nhắn',
      messagePlaceholder: 'Hãy chia sẻ nhu cầu sử dụng nhà xưởng của doanh nghiệp.',
      submit: 'ĐẶT LỊCH THAM QUAN'
    },
    footer: {
      tagline: 'Cho thuê nhà xưởng | Liên hệ trực tiếp',
      phoneLabel: 'Điện thoại:',
      quickAccess: 'Liên kết nhanh',
      location: 'Vị trí',
      facility: 'Nhà xưởng',
      operations: 'Vận hành',
      inquiry: 'Liên hệ thuê',
      directInquiry: 'Liên hệ trực tiếp'
    }
  },
  ja: {
    meta: {
      title: 'バクニン省の工場賃貸 | Thuận Thành II 工業団地',
      description: 'ベトナム・バクニン省 Thuận Thành II 工業団地の新築工場を賃貸。総賃貸面積15,260 m²、受電容量4,000 kVA。詳細はお気軽にお問い合わせください。',
      ogDescription: 'バクニン省の新築工場。総賃貸面積15,260 m²、受電容量4,000 kVA、同一仕様の工場棟2棟を備えています。'
    },
    brand: { sub: '工場複合施設' },
    nav: {
      about: 'ホーム',
      facility: '工場概要',
      location: '所在地',
      specifications: '技術仕様',
      gallery: 'ギャラリー',
      contact: 'お問い合わせ',
      requestDetails: '資料を請求'
    },
    hero: {
      eyebrow: '新築工場・賃貸物件',
      title: '工場を賃貸',
      subtitle: 'Thuận Thành II 工業団地\nバクニン、ベトナム',
      meta: '総賃貸面積 15,260 m²',
      blurb: '整ったインフラと柔軟なスペースを備えた、製造業に適した工場です。事業規模や用途に応じてご検討いただけます。',
      request: '工場資料を請求',
      view: '工場を見る',
      scroll: '下へスクロール'
    },
    stats: {
      totalArea: '賃貸面積 (m²)',
      blocks: '同一仕様の2階建て工場棟',
      power: '変電所2か所 合計 (kVA)',
      elevator: 'エレベーター積載荷重 (トン)'
    },
    intro: {
      eyebrow: 'オーナー直接募集',
      title: 'Thuận Thành II 工業団地内の便利な立地',
      paragraph1: 'ベトナム・バクニン省 Thuận Thành II 工業団地 CN 42.1区画。',
      paragraph2: '工業インフラが整った団地内に位置し、製造業をはじめとする幅広い事業用途に対応します。',
      map: '地図で場所を確認',
      mapAria: 'バクニン省 Thuận Thành II 工業団地の所在地図',
      mapLot: 'CN 42.1区画',
      mapPark: 'Thuận Thành II 工業団地',
      mapCity: 'ベトナム・バクニン省'
    },
    facility: {
      eyebrow: '施設概要',
      title: '同一仕様の2階建て工場棟が2棟',
      sub: '2棟とも同じ設計で、工場と事務所を備えています。',
      perBuilding: '1棟あたりの面積',
      factory: '工場',
      office: '事務所'
    },
    interior: {
      eyebrow: '工場内観',
      title: '生産現場に配慮した設計',
      caption1: '1階 | 高さ 7.9 m | 床荷重 3 t/m²',
      caption2: '2階 | 高さ 6 m | 床荷重 1.5 t/m²'
    },
    logistics: {
      eyebrow: '物流・荷役設備',
      title: '日々の工場運営を支える設備',
      item1: '積載荷重5トンの貨物用エレベーター',
      item2: '2階への大型資材搬入に対応',
      item3: '自動消火設備'
    },
    support: {
      eyebrow: '事務所・付帯設備',
      title: '事務所と工場を支える付帯設備',
      item1: '事務所と工場それぞれにトイレを設置',
      item2: '事務所スペース',
      item3: '廃棄物保管場所',
      item4: '排水処理設備'
    },
    power: {
      eyebrow: '電力・インフラ',
      title: '電力・インフラ設備',
      total: '総電力容量',
      transformers: '変圧器',
      fireLabel: '自動消火設備',
      fireSmall: '設置済み',
      wastewaterLabel: '排水処理',
      wastewaterSmall: '施設'
    },
    gallery: {
      eyebrow: '現地写真・動画',
      title: '工場のご紹介',
      tabFlycam: '空撮動画',
      tabWarehouse: '工場内観',
      tabLogistics: '工場外観',
      tabSupport: '消火器'
    },
    tech: {
      eyebrow: '技術情報',
      title: '工場面積・設備仕様',
      spec1Label: '工場面積',
      spec1Value: '6,980 m²/棟',
      spec2Label: '事務所面積',
      spec2Value: '650 m²/棟',
      spec3Label: '階高',
      spec3Value: '1階: 7.9 m | 2階: 6 m',
      spec4Label: '床耐荷重',
      spec4Value: '1階: 3 t/m² | 2階: 1.5 t/m²',
      spec5Label: 'エレベーター積載荷重',
      spec5Value: '5トン',
      spec6Label: '電力容量',
      spec6Value: '4,000 kVA (変電所2か所)',
      download: '工場案内資料をダウンロード'
    },
    lease: {
      eyebrow: '賃貸条件',
      title: '賃貸条件',
      factoryLabel: '工場',
      officeLabel: 'オフィス',
      note: '空き状況、賃貸条件、現地見学についてご相談ください。'
    },
    contact: {
      eyebrow: '直接問い合わせ',
      title: '新たな生産拠点をお探しですか？',
      description: '現地見学のご予約や詳しい仕様資料のご希望は、担当者までお気軽にご連絡ください。',
      manager: 'クオン氏',
      phone: '電話',
      whatsapp: 'WhatsApp',
      zalo: 'Zalo',
      email: 'メール'
    },
    form: {
      company: '会社名',
      contact: 'ご担当者名',
      country: '国',
      email: 'メールアドレス',
      phone: '電話番号',
      area: '希望工場面積',
      areaPlaceholder: '例: 5,000 m²',
      date: '賃貸開始希望時期',
      message: 'メッセージ',
      messagePlaceholder: '生産要件をご記入ください。',
      submit: '現地見学を予約'
    },
    footer: {
      tagline: '工場賃貸 | 直接お問い合わせ',
      phoneLabel: '電話:',
      quickAccess: 'メニュー',
      location: '所在地',
      facility: '工場概要',
      operations: '設備',
      inquiry: 'お問い合わせ',
      directInquiry: 'お問い合わせ'
    }
  },
  ko: {
    meta: {
      title: '베트남 박닌 공장 임대 | 투언타인 II 산업단지',
      description: '베트남 박닌성 투언타인 II 산업단지의 신축 공장을 임대합니다. 총 임대 면적 15,260 m², 수전 용량 4,000 kVA. 자세한 내용은 문의해 주세요.',
      ogDescription: '박닌성의 신축 공장 임대. 총 임대 면적 15,260 m², 수전 용량 4,000 kVA, 동일한 설계의 2층 공장 2개 동.'
    },
    brand: { sub: '공장 단지' },
    nav: {
      about: '홈',
      facility: '공장 안내',
      location: '위치 안내',
      specifications: '기술 사양',
      gallery: '갤러리',
      contact: '연락처',
      requestDetails: '자료 문의'
    },
    hero: {
      eyebrow: '신축 공장 임대',
      title: '공장 임대 안내',
      subtitle: '투언타인 II 산업단지\n베트남 박닌성',
      meta: '총 임대 면적 15,260 m²',
      blurb: '산업 인프라가 잘 갖춰진 공장으로, 다양한 제조업 운영에 적합한 공간과 유연한 활용성을 제공합니다.',
      request: '공장 자료 문의',
      view: '공장 둘러보기',
      scroll: '아래로 스크롤'
    },
    stats: {
      totalArea: '임대 면적 (m²)',
      blocks: '동일한 설계의 2층 공장',
      power: '2개 변전소 총 전력 (kVA)',
      elevator: '승강기 적재 용량 (톤)'
    },
    intro: {
      eyebrow: '임대 문의',
      title: '투언타인 II 산업단지 내 편리한 입지',
      paragraph1: '베트남 박닌성 투언타인 II 산업단지 CN 42.1 부지',
      paragraph2: '산업 인프라가 잘 갖춰진 단지에 위치해 제조업을 비롯한 다양한 산업 운영에 적합합니다.',
      map: '지도에서 위치 확인',
      mapAria: '베트남 박닌성 투언타인 II 산업단지 위치 지도',
      mapLot: 'CN 42.1 부지',
      mapPark: '투언타인 II 산업단지',
      mapCity: '베트남 박닌성'
    },
    facility: {
      eyebrow: '시설 개요',
      title: '동일한 설계의 2층 공장 2개 동',
      sub: '두 동 모두 같은 설계로 공장과 사무 공간을 갖추고 있습니다.',
      perBuilding: '공장 1개 동 기준 면적',
      factory: '공장 공간',
      office: '사무 공간'
    },
    interior: {
      eyebrow: '공장 내부',
      title: '생산 운영에 맞춘 설계',
      caption1: '1층 | 층고 7.9 m | 바닥 하중 3톤/m²',
      caption2: '2층 | 층고 6 m | 바닥 하중 1.5톤/m²'
    },
    logistics: {
      eyebrow: '물류 및 자재 운반',
      title: '원활한 공장 운영을 위한 설비',
      item1: '적재 용량 5톤 화물용 승강기',
      item2: '2층 대형 자재 반입 가능',
      item3: '자동 소화 설비'
    },
    support: {
      eyebrow: '사무 및 부대시설',
      title: '사무 공간과 공장 운영 지원 시설',
      item1: '사무실·공장 구역별 화장실',
      item2: '사무 공간',
      item3: '폐기물 보관 공간',
      item4: '폐수 처리 시설'
    },
    power: {
      eyebrow: '전력 및 인프라',
      title: '전력 및 기반 시설',
      total: '총 전력 용량',
      transformers: '변압기',
      fireLabel: '자동 소화 설비',
      fireSmall: '설치 완료',
      wastewaterLabel: '폐수 처리',
      wastewaterSmall: '시설'
    },
    gallery: {
      eyebrow: '현장 사진 및 영상',
      title: '공장 둘러보기',
      tabFlycam: '항공 촬영 영상',
      tabWarehouse: '공장 내부',
      tabLogistics: '공장 외관',
      tabSupport: '소화기'
    },
    tech: {
      eyebrow: '기술 정보',
      title: '공장 면적 및 주요 사양',
      spec1Label: '공장 면적',
      spec1Value: '6,980 m²/개 동',
      spec2Label: '사무실 면적',
      spec2Value: '650 m²/개 동',
      spec3Label: '층고',
      spec3Value: '1층: 7.9 m | 2층: 6 m',
      spec4Label: '바닥 하중',
      spec4Value: '1층: 3톤/m² | 2층: 1.5톤/m²',
      spec5Label: '승강기 적재 용량',
      spec5Value: '5톤',
      spec6Label: '전력 용량',
      spec6Value: '4,000 kVA (변전소 2개소)',
      download: '공장 안내 자료 다운로드'
    },
    lease: {
      eyebrow: '임대 조건',
      title: '임대 조건',
      factoryLabel: '공장',
      officeLabel: '사무실',
      note: '가용 여부, 임대 조건 및 현장 방문에 대한 상담을 원하시면 연락해 주세요.'
    },
    contact: {
      eyebrow: '직접 문의',
      title: '새로운 생산 거점을 찾고 계신가요?',
      description: '현장 방문 예약이나 상세 사양 자료가 필요하시면 담당자에게 문의해 주세요.',
      manager: '끄엉 담당자',
      phone: '전화',
      whatsapp: 'WhatsApp',
      zalo: 'Zalo',
      email: '이메일'
    },
    form: {
      company: '회사명',
      contact: '담당자',
      country: '국가',
      email: '이메일',
      phone: '전화번호',
      area: '필요 공장 면적',
      areaPlaceholder: '예: 5,000 m²',
      date: '임대 시작 희망 시기',
      message: '메시지',
      messagePlaceholder: '생산 요구 사항을 알려주세요.',
      submit: '현장 방문 예약'
    },
    footer: {
      tagline: '공장 임대 | 직접 문의',
      phoneLabel: '전화:',
      quickAccess: '빠른 링크',
      location: '위치 안내',
      facility: '공장 안내',
      operations: '설비',
      inquiry: '임대 문의',
      directInquiry: '직접 문의'
    }
  },
  zh: {
    meta: {
      title: '越南北寧廠房出租 | Thuận Thành II 工業區',
      description: '越南北寧 Thuận Thành II 工業區新建廠房出租，總出租面積 15,260 m²，供電容量 4,000 kVA。歡迎直接洽詢。',
      ogDescription: '越南北寧新建廠房出租，總出租面積 15,260 m²，供電容量 4,000 kVA，包含兩棟相同規格的廠房。'
    },
    brand: { sub: '工廠複合體' },
    nav: {
      about: '首頁',
      facility: '廠房介紹',
      location: '地點資訊',
      specifications: '技術規格',
      gallery: '影像導覽',
      contact: '聯絡',
      requestDetails: '索取資料'
    },
    hero: {
      eyebrow: '全新廠房出租',
      title: '廠房出租',
      subtitle: 'Thuận Thành II 工業園區\n北寧、越南',
      meta: '總出租面積 15,260 m²',
      blurb: '廠房位於交通便利、工業設施完善的園區，空間規劃靈活，適合各類製造業營運需求。',
      request: '索取廠房資料',
      view: '查看廠房',
      scroll: '向下瀏覽'
    },
    stats: {
      totalArea: '出租面積 (m²)',
      blocks: '兩棟相同設計的兩層廠房',
      power: '兩座變電站總電力 (kVA)',
      elevator: '電梯載重能力 (噸)'
    },
    intro: {
      eyebrow: '業主直接出租',
      title: '位於 Thuận Thành II 工業區，交通便利',
      paragraph1: '越南北寧 Thuận Thành II 工業區 CN 42.1 地段。',
      paragraph2: '園區工業配套完善，適合製造業及其他工業用途。',
      map: '查看地圖位置',
      mapAria: '越南北寧 Thuận Thành II 工業區位置地圖',
      mapLot: 'CN 42.1 地段',
      mapPark: 'Thuận Thành II 工業區',
      mapCity: '越南北寧'
    },
    facility: {
      eyebrow: '設施概覽',
      title: '兩棟相同設計的兩層廠房',
      sub: '兩棟廠房規格一致，均設有生產空間及辦公室。',
      perBuilding: '每棟廠房面積',
      factory: '廠房空間',
      office: '辦公室'
    },
    interior: {
      eyebrow: '工廠內部',
      title: '配合生產需求的空間規劃',
      caption1: '一樓 | 樓高 7.9 m | 樓板載重 3 噸/m²',
      caption2: '二樓 | 樓高 6 m | 樓板載重 1.5 噸/m²'
    },
    logistics: {
      eyebrow: '物流與物料搬運設備',
      title: '完善設備，支援日常營運',
      item1: '載重 5 噸貨運升降機',
      item2: '大型物料可運送至二樓',
      item3: '自動滅火設備'
    },
    support: {
      eyebrow: '辦公室與附屬設施',
      title: '辦公空間及廠房配套設施',
      item1: '辦公室及廠房分設洗手間',
      item2: '辦公空間',
      item3: '廢棄物存放區',
      item4: '廢水處理設備'
    },
    power: {
      eyebrow: '電力與基礎設施',
      title: '電力及基礎設施',
      total: '總電力容量',
      transformers: '變壓器',
      fireLabel: '自動滅火設備',
      fireSmall: '已設置',
      wastewaterLabel: '廢水處理',
      wastewaterSmall: '設施'
    },
    gallery: {
      eyebrow: '現場照片與影片',
      title: '廠房影像導覽',
      tabFlycam: '空拍影片',
      tabWarehouse: '廠房內部',
      tabLogistics: '廠房外觀',
      tabSupport: '滅火器'
    },
    tech: {
      eyebrow: '技術資訊',
      title: '廠房面積與設備規格',
      spec1Label: '廠房面積',
      spec1Value: '6,980 m²/棟',
      spec2Label: '辦公室面積',
      spec2Value: '650 m²/棟',
      spec3Label: '樓層高度',
      spec3Value: '一樓：7.9 m | 二樓：6 m',
      spec4Label: '樓板載重',
      spec4Value: '一樓：3 噸/m² | 二樓：1.5 噸/m²',
      spec5Label: '升降機載重',
      spec5Value: '5 噸',
      spec6Label: '電力容量',
      spec6Value: '4,000 kVA（兩座變電站）',
      download: '下載廠房介紹資料'
    },
    lease: {
      eyebrow: '租賃條款',
      title: '租賃條款',
      factoryLabel: '工廠',
      officeLabel: '辦公室',
      note: '聯絡我們以了解空缺狀況、租賃條款及現場考察。'
    },
    contact: {
      eyebrow: '直接詢問',
      title: '正在為企業尋找新的生產據點嗎？',
      description: '歡迎直接聯絡我們，預約現場參觀或索取詳細設備規格。',
      manager: 'CUONG 先生',
      phone: '電話',
      whatsapp: 'WhatsApp',
      zalo: 'Zalo',
      email: '電子郵件'
    },
    form: {
      company: '公司名稱',
      contact: '聯絡人',
      country: '國家',
      email: '電子郵件',
      phone: '電話',
      area: '所需工廠面積',
      areaPlaceholder: '例如：5,000 m²',
      date: '預計起租時間',
      message: '訊息',
      messagePlaceholder: '請告訴我們您的生產需求。',
      submit: '預約現場參觀'
    },
    footer: {
      tagline: '工廠租賃 | 直接詢問',
      phoneLabel: '電話：',
      quickAccess: '快速連結',
      location: '地點資訊',
      facility: '廠房介紹',
      operations: '設備',
      inquiry: '租賃洽詢',
      directInquiry: '直接聯絡'
    }
  }
};

const getNestedValue = (obj, path) => path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

const header = document.querySelector('.site-header');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-counter]');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryButtons = document.querySelectorAll('.gallery-item');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryPanels = document.querySelectorAll('.gallery-panel');
const brochureSelect = document.querySelector('.brochure-lang');
const brochureButton = document.querySelector('.brochure-btn');
const inquiryForm = document.getElementById('inquiry-form');
const metaDescription = document.querySelector('meta[name="description"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const languageSelect = document.querySelector('.lang');
const localizedElements = document.querySelectorAll('[data-i18n]');
const localizedPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

const updateHeaderState = () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const revealOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const animateCounter = (element) => {
  const target = Number(element.dataset.counter);
  const duration = 700;
  const start = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const openLightbox = (src) => {
  lightboxImage.src = src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
};

const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
};

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openLightbox(button.dataset.image);
  });
});

if (brochureSelect && brochureButton) {
  brochureSelect.addEventListener('change', () => {
    brochureButton.href = 'Báo giá cho thuê nhà xưởng.pdf';
    brochureButton.removeAttribute('download');
    brochureButton.setAttribute('target', '_blank');
    brochureButton.setAttribute('rel', 'noreferrer');
  });
}

galleryTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selectedTab = tab.dataset.tab;

    galleryTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    galleryPanels.forEach((panel) => {
      const isActive = panel.id === `tab-${selectedTab}`;
      panel.classList.toggle('active', isActive);
    });
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

const applyLanguage = (locale) => {
  const dictionary = translations[locale];
  if (!dictionary) return;

  document.documentElement.lang = locale;
  document.title = dictionary.meta.title;
  metaDescription.setAttribute('content', dictionary.meta.description);
  ogDescription.setAttribute('content', dictionary.meta.ogDescription);

  localizedElements.forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18n);
    if (value) {
      if (typeof value === 'string' && value.includes('\n')) {
        element.innerHTML = value.replace(/\n/g, '<br />');
      } else {
        element.textContent = value;
      }
    }
  });

  localizedPlaceholders.forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18nPlaceholder);
    if (value) {
      element.placeholder = value;
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18nAria);
    if (value) {
      element.setAttribute('aria-label', value);
    }
  });

  languageSelect.value = locale;
};

languageSelect.addEventListener('change', () => {
  applyLanguage(languageSelect.value);
});

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();
revealOnScroll();
applyLanguage('en');
