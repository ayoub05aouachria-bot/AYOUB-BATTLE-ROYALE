# AYOUB BATTLE ROYALE

مشروع واحد يحتوي لعبة HTML تعمل على الكمبيوتر والمتصفح والهاتف، مع إعدادات بناء APK للأندرويد و EXE لويندوز عبر GitHub Actions دون Android Studio على جهازك.

## الملفات
- `www/index.html`: اللعبة كاملة (HTML/CSS/JavaScript).
- `capacitor.config.json`: إعداد تطبيق Android.
- `electron-main.cjs`: نافذة تطبيق Windows.
- `.github/workflows/build-android.yml`: بناء APK على GitHub.
- `.github/workflows/build-windows.yml`: بناء EXE على GitHub.

## بناء النسختين دون Android Studio محليًا
1. أنشئ حسابًا على https://github.com إن لم يكن لديك.
2. أنشئ مستودعًا جديدًا باسم `ayoub-battle-royale`.
3. ارفع جميع محتويات هذا المجلد إلى المستودع، مع الاحتفاظ بمجلد `.github`.
4. افتح تبويب **Actions** في المستودع.
5. شغّل **Build Android APK** وانتظر انتهاء العملية بنجاح.
6. افتح نتيجة التشغيل (workflow run)، ثم نزّل artifact باسم `AYOUB-BATTLE-ROYALE-APK`. بداخله `app-debug.apk`.
7. كرر ذلك مع **Build Windows EXE**، ثم نزّل artifact باسم `AYOUB-BATTLE-ROYALE-WINDOWS`.

## ملاحظات مهمة
- لا تحتاج إلى تثبيت Android Studio على كمبيوترك؛ GitHub Actions ينفذ البناء على خوادمه.
- تحتاج إلى حساب GitHub واتصال إنترنت لرفع المشروع وتنزيل ملفات البناء.
- ملف APK الناتج هنا نسخة Debug للتجربة والتثبيت اليدوي، وليس نسخة متجر Google Play الموقعة للنشر.
- لا تثبّت APK إلا على جهاز تملكه أو لديك إذن باستخدامه. قد يعرض Android تحذيرًا عند تثبيت تطبيق من خارج المتجر.
- تقدم اللعبة والنجوم محفوظة محليًا على كل جهاز/متصفح، ولا تتم مزامنتها تلقائيًا بين الهاتف والكمبيوتر.
- أول تشغيل لـ Electron أو Capacitor قد يحتاج وقتًا لتنزيل الحزم.
