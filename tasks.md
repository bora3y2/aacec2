# AACEC Website — Content & Design Update Plan

Project: `aacec2` (React + Vite + Tailwind + i18n `en`/`ar`)
Goal: Rewrite Arabic copy, update English to match, refresh images & visuals, add WhatsApp + animated counters.

> **Review note:** Arabic text below is cleaned from the source notes. The 6 images in `/Users/ahmedmohamed/Documents/Websites/aacec/images/` are assigned **provisionally (by dimensions)** — please confirm each mapping visually before approving. The model could not view the images.

---

## 1. Files involved

| Concern | File(s) |
|---|---|
| Arabic copy | `src/translations/ar.ts` |
| English copy | `src/translations/en.ts` |
| Type shape (2 counters, 6→6 services, etc.) | `src/translations/types.ts` |
| Hero (logo size, bg image, title, counters) | `src/components/Hero.tsx` |
| About (image, title, vision/mission size) | `src/components/About.tsx` |
| Services (delete monitoring, update cards) | `src/components/Services.tsx` |
| WhyUs (title, subtitle, 6 cards) | `src/components/WhyUs.tsx` |
| Projects (subtitle, 4 sector cards + images) | `src/components/Projects.tsx` |
| Contact (title, subtitle, bg color, map, WhatsApp) | `src/components/Contact.tsx` |
| Floating WhatsApp button (new, on all pages) | new `src/components/WhatsAppButton.tsx` + `App.tsx` |
| Animated counter (new) | new `src/hooks/useCountUp.ts` + Hero/About |
| New section images | copy `images/*` → `public/assets/sections/` |
| Env (phone) already done | `.env`, `vite.config.ts` |

---

## 2. Tasks — by section

### A. Main page (Hero) — `Hero.tsx` + `ar.ts`/`en.ts`
- [ ] **Logo** — slightly enlarge logo in the navbar (`Navbar.tsx:46`), keep clarity on dark bg.
- [ ] **Background** — replace hero background image (use assigned image); increase spacing between menu row and content (`pt-24` → larger / `pt-32`).
- [ ] **WhatsApp floating icon** — add bottom-left floating WhatsApp button, linked to company WhatsApp (`https://wa.me/9660532755899`). New component.
- [ ] **Main title** — replace:
  - AR old: `نبني مستقبلاً أكثر استدامةً`
  - AR new: `حلول واستشارات بيئية لتحقيق الامتثال والاستدامة`
  - EN new: `Environmental Solutions and Consultancy for Compliance and Sustainability`
- [ ] **Subheadline** — replace:
  - AR new: `نساعد المنشآت في إعداد الدراسات البيئية، وإصدار التصاريح، والتدقيق البيئي، وخطط الإدارة البيئية وفق الأنظمة والاشتراطات المعمول بها في المملكة`
  - EN new: `We help organizations prepare environmental studies, obtain permits, conduct environmental audits, and build environmental management plans in line with the regulations and requirements in force across the Kingdom`
- [ ] **Stats → animated counters** — change static `+10 / +200 / +150` to count up from **0** when visible (`useCountUp` hook).
- [ ] **Badge** — keep `خبراء الاستشارات البيئية` / `Environmental Consulting Experts`.

### B. About (`من نحن`) — `About.tsx` + translations
- [ ] **Replace image** with activity-reflecting photo (assigned image).
- [ ] **Title** — replace:
  - AR new: `شريككم الموثوق في الاستشارات والامتثال البيئي`
  - EN new: `Your Trusted Partner in Environmental Consultancy and Compliance`
- [ ] **Description** — replace:
  - AR new: `شركة أمانة الأرض للاستشارات البيئية شركة سعودية متخصصة في تقديم الحلول والاستشارات البيئية، وإعداد الدراسات البيئية، والتدقيق البيئي، وخطط الإدارة البيئية، بما يدعم تحقيق الامتثال والاستدامة لمشاريع القطاعين الحكومي والخاص`
  - EN new: `Amana Alard Company for Environmental Consulting is a Saudi specialized firm providing environmental solutions and consultancy, preparing environmental studies, conducting environmental audits, and building environmental management plans that support compliance and sustainability for both government and private sector projects`
- [ ] **Vision & Mission** — enlarge/emphasize visual treatment for readability.

### C. Services (`خدماتنا`) — `Services.tsx` + translations
- [ ] **Title** — replace:
  - AR old: `خدمات استشارية بيئية شاملة`
  - AR new: `حلول بيئية متكاملة لمشاريعكم ومنشآتكم`
  - EN new: `Integrated Environmental Solutions for Your Projects and Facilities`
- [ ] **Subtitle** — replace:
  - AR new: `نقدم خدمات استشارية بيئية متخصصة تشمل دراسات تقييم الأثر البيئي، والامتثال البيئي، والتصاريح البيئية، وإعداد خطط الإدارة البيئية، وإدارة النفايات، ودراسات الاستدامة، بما يدعم تحقيق الامتثال للأنظمة البيئية ويسهم في نجاح المشاريع واستدامتها`
  - EN new: `We provide specialized environmental consultancy covering impact assessment studies, environmental compliance and permits, environmental management plans, waste management, and sustainability studies — supporting compliance and project success`
- [ ] **Delete the `رصد جودة الهواء والماء والتربة / Air, Water & Soil Quality Monitoring` card** (from `services.items`, current index 5).
- [ ] **Remaining cards** (final set of 6), with AR + EN:
  1. **دراسات تقييم الأثر البيئي** — `إعداد دراسات تقييم الأثر البيئي للمشاريع وفق متطلبات الجهات المختصة، مع تقييم الآثار البيئية وتحديد إجراءات التخفيف المناسبة بما يدعم تحقيق الامتثال البيئي والتنمية المستدامة` / EN: `Preparing environmental impact assessment studies per competent authority requirements, evaluating environmental impacts, and identifying suitable mitigation measures to support environmental compliance and sustainable development`
  2. **التدقيق البيئي والخطط البيئية** — `أعمال التدقيق البيئي وإعداد خطط الإدارة البيئية وخطط تنفيذ التخفيف والمتابعة، بما يساهم في رفع مستوى الامتثال وتحسين الأداء البيئي للمنشآت` / EN: `Environmental audits and the preparation of environmental management and mitigation implementation plans to raise compliance and improve environmental performance`
  3. **الامتثال والتصاريح البيئية** — `دعم المنشآت في استيفاء متطلبات الامتثال البيئي، وإعداد السجل البيئي، وتقارير المراقبة الذاتية، وإدارة إجراءات إصدار وتجديد التصاريح البيئية` / EN: `Supporting facilities in meeting environmental compliance requirements, preparing environmental records and self-monitoring reports, and managing permit issuance and renewal`
  4. **إدارة النفايات** — `إعداد خطط إدارة النفايات وتصنيفها وآليات تخزينها ونقلها والتخلص منها، بما يتوافق مع الأنظمة والاشتراطات البيئية وأفضل الممارسات` / EN: `Preparing waste management plans including classification, storage, transport, and disposal in line with environmental regulations and best practices`
  5. **الاستدامة وتقارير ESG** — `إعداد دراسات الاستدامة وتقارير المسؤولية البيئية (ESG)، ودعم التنمية المستدامة للمنشآت وتطوير المبادرات التي تعزز الأداء البيئي` / EN: `Preparing sustainability studies and Environmental, Social, and Governance (ESG) and environmental responsibility reports, supporting sustainable development and environmental performance initiatives`
  6. **الاستشارات البيئية للمشاريع** — `تقديم الاستشارات البيئية للمشاريع في مختلف مراحلها، من التخطيط والتصميم وحتى التشغيل، لضمان الامتثال للأنظمة وتقليل المخاطر البيئية` / EN: `Providing environmental consultancy across all project phases — planning, design, and operation — to ensure regulatory compliance and reduce environmental risk`

> ⚠️ Confirm: the source notes say "delete the monitoring/measurements service" but then list 6 remaining service cards. Current app has 6 cards. The plan keeps a **final list of 6** (shown above). If you intended 5, tell us which to drop.

### D. Why Us (`لماذا نحن`) — `WhyUs.tsx` + translations
- [ ] **Title** — replace:
  - AR old: `علم راسخ. معايير صارمة. نتائج ملموسة.`
  - AR new: `خبرة موثوقة... وحلول بيئية تصنع الفرق`
  - EN new: `Trusted Expertise... Environmental Solutions That Make a Difference`
- [ ] **Subtitle** — replace:
  - AR new: `نلتزم بتقديم خدمات استشارية بيئية تجمع بين الخبرة الفنية، والالتزام بالأنظمة، والحلول العملية، لمساعدة عملائنا على تحقيق الامتثال البيئي وتعزيز استدامة مشاريعهم`
  - EN new: `We are committed to providing environmental consultancy that combines technical expertise, regulatory compliance, and practical solutions to help our clients achieve environmental compliance and sustain their projects`
- [ ] **Replace the 6 cards** (AR + EN):
  1. **خبرة متخصصة** — `نمتلك خبرة في تقديم الدراسات والاستشارات البيئية لمختلف القطاعات، مع فهم عميق للأنظمة والاشتراطات البيئية، بما يضمن تقديم حلول عملية تلبي احتياجات عملائنا` / EN: `We bring experience in delivering environmental studies and consultancy across sectors, with deep understanding of environmental regulations to provide practical solutions that meet our clients' needs`
  2. **جودة وموثوقية** — `نلتزم بإعداد دراسات وتقارير بيئية دقيقة وموثوقة، وفق منهجيات علمية وأفضل الممارسات المهنية، لضمان جودة المخرجات وتحقيق أعلى مستويات الاعتماد` / EN: `We prepare accurate, reliable environmental studies and reports using scientific methodologies and professional best practices to ensure quality outputs and the highest credibility`
  3. **امتثال للأنظمة** — `ندعم المنشآت في تحقيق الامتثال للأنظمة واللوائح البيئية، من خلال حلول واستشارات متخصصة تتوافق مع متطلبات الجهات التنظيمية في المملكة` / EN: `We support facilities in achieving compliance with environmental laws through specialized solutions aligned with the Kingdom's regulatory requirements`
  4. **حلول عملية** — `نقدم حلولاً بيئية متكاملة وقابلة للتطبيق، تراعي طبيعة كل مشروع، وتسهم في إدارة المخاطر البيئية وتعزيز استدامة الأعمال` / EN: `We deliver integrated, actionable environmental solutions tailored to each project that manage environmental risk and enhance business sustainability`
  5. **التزام بالمواعيد** — `نحرص على تنفيذ الأعمال وتسليم الدراسات والتقارير ضمن الجداول الزمنية المتفق عليها، مع المحافظة على جودة المخرجات ودقتها في جميع مراحل العمل` / EN: `We complete and deliver studies and reports within agreed timelines while maintaining output quality and accuracy throughout`
  6. **شراكة مستمرة** — `نؤمن بأن نجاح المشروع يعتمد على التعاون المستمر، لذلك نقدم الدعم الفني والاستشاري لعملائنا في مختلف مراحل المشروع، وصولاً إلى تحقيق أهدافهم البيئية` / EN: `We believe project success relies on continuous collaboration, providing technical and advisory support at every stage toward achieving our clients' environmental goals`

### E. Projects (`مشاريعنا`) — `Projects.tsx` + translations
- [ ] **Subtitle** — replace (keep existing title):
  - AR new: `نفخر بتنفيذ مشاريع واستشارات بيئية في قطاعات متنوعة، مقدمين حلولاً عملية تدعم الامتثال البيئي وتعزز استدامة المشاريع وفق الأنظمة والاشتراطات المعمول بها`
  - EN new: `We are proud to deliver environmental projects and consultancy across diverse sectors, offering practical solutions that support environmental compliance and project sustainability under applicable regulations`
- [ ] **Replace 4 sector cards** (+ add an **image per card** reflecting the sector), AR + EN:
  1. **الصناعة والتعدين** — `حلول واستشارات بيئية متخصصة للمشاريع الصناعية والتعدينية` / EN: `Specialized environmental solutions and consultancy for industrial and mining projects`
  2. **الزراعة والموارد المائية** — `دراسات بيئية تدعم استدامة المشاريع الزراعية وإدارة الموارد المائية` / EN: `Environmental studies supporting agricultural sustainability and water resource management`
  3. **الإنشاءات والتطوير العمراني** — `خدمات بيئية متكاملة لمشاريع البناء والتطوير العمراني` / EN: `Integrated environmental services for construction and urban development projects`
  4. **الورش الحرفية والمنشآت الخدمية** — `استشارات بيئية لتحقيق الامتثال ورفع كفاءة الأداء البيئي` / EN: `Environmental consultancy for compliance and improved environmental performance`
- [ ] **CTA button** — replace:
  - AR old: `تواصل مع فريقنا`
  - AR new: `تواصل معنا لمناقشة احتياجات مشروعك، وسنقدم الحلول البيئية المناسبة التي تساعدك على تحقيق الامتثال والاستدامة بكفاءة`
  - EN new: `Contact us to discuss your project needs, and we will provide the right environmental solutions to help you achieve compliance and sustainability efficiently`

### F. Contact (`تواصل معنا`) — `Contact.tsx` + translations
- [ ] **Section title** — replace:
  - AR old: `تواصل معنا`
  - AR new: `تواصل مع خبرائنا البيئيين`
  - EN new: `Contact Our Environmental Experts`
- [ ] **Subtitle** — replace:
  - AR old: `فريقنا جاهز لمساعدتك في احتياجاتك الاستشارية البيئية.`
  - AR new: `يسعد فريقنا بالإجابة عن استفساراتكم وتقديم الحلول والاستشارات البيئية المناسبة لمتطلبات مشاريعكم`
  - EN new: `Our team is glad to answer your inquiries and provide the appropriate environmental solutions and consultancy for your project needs`
- [ ] **Phone number** — already `.env`-driven: `VITE_CONTACT_PHONE=+9660532755899` (drop the leading `0`, keep `+966`). ✅ done
- [ ] **Contact info card bg color** — restyle so the company logo reads clearly; enlarge logo.
- [ ] **Map location + enlarge** — verify `VITE_MAP_ADDRESS` (`Riyadh, Saudi Arabia`) and increase map height (e.g. `238px` → `340px+`).
- [ ] **Add WhatsApp contact option** in the contact info block (link to `https://wa.me/...`).

### G. Global / Quality
- [ ] Copy required images into `public/assets/sections/` (or similar) and reference locally (avoid broken remote URLs).
- [ ] Verify final services count & icons match (`Services.tsx` `ICONS` array).
- [ ] Run `npm run typecheck` and `npm run lint` after edits.
- [ ] Run `npm run build` and confirm output.

---

## 3. Image assignment (provisional — confirm visually)

| Destination | Dimensions | File (in `images/`) |
|---|---|---|
| Hero background | 1600×1066 | `WhatsApp Image 2026-08-05 at 16.13.31 (3).jpeg` |
| About image | 1200×800 | `WhatsApp Image 2026-08-05 at 16.13.31 (1).jpeg` |
| Projects card 1 (Industrial) | 1280×720 | `WhatsApp Image 2026-08-05 at 16.13.31 (2).jpeg` |
| Projects card 2 (Agriculture/Water) | 1290×860 | `WhatsApp Image 2026-08-05 at 16.13.32.jpeg` |
| Projects card 3 (Construction) | 1290×860 | `WhatsApp Image 2026-08-05 at 16.13.32 (1).jpeg` |
| Projects card 4 (Services/Workshops) | 700×467 | `WhatsApp Image 2026-08-05 at 16.13.31.jpeg` |

---

## 4. Review checklist

- [ ] All Arabic titles/subtitles/cards match the source notes (sections A–F)
- [ ] English copy updated to mirror Arabic everywhere
- [ ] Monitoring/measurements service removed; final service list confirmed (6 or 5?)
- [ ] Hero: larger logo, new bg, new spacing, new headline/subtext, counters animate from 0
- [ ] About: new image, new title, new description, vision/mission enlarged
- [ ] Services: new title/subtitle, cards reworded
- [ ] WhyUs: new title/subtitle + 6 new cards
- [ ] Projects: new subtitle, 4 new sector cards each with image
- [ ] Contact: new title/subtitle, phone `+9660532755899`, WhatsApp option, map enlarged, info-bg restyled
- [ ] Floating WhatsApp button bottom-left on all pages
- [ ] Images copied locally & every `src` path updated (no broken links)
- [ ] `npm run typecheck` / `lint` / `build` pass
- [ ] Preview both EN and AR, desktop + mobile