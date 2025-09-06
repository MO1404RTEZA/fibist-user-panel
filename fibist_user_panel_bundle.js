
// Fibist User Panel - JS bundle for WordPress
// Mock version بدون نیاز به محیط React
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('fibist-panel');
    if (!container) return;
    container.innerHTML = `
    <div style="font-family:sans-serif; display:flex; height:100%;">
      <div style="width:250px; background:#fff; padding:10px; box-shadow:0 0 5px rgba(0,0,0,0.2);">
        <h3 style="text-align:center;">پنل کاربری فیبیست</h3>
        <ul style="list-style:none; padding:0;">
          <li>📌 داشبورد</li>
          <li>📚 مقالات</li>
          <li>🎥 فیلم‌ها</li>
          <li>🖼️ گالری/اطلاعیه‌ها</li>
          <li>🟢 دوره‌ها</li>
          <li>📜 مدارک</li>
          <li>📊 فعالیت‌ها</li>
          <li>✍️ ارسال‌ها</li>
          <li>🛒 فروشگاه</li>
          <li>📩 ارتباط با ادمین</li>
          <li>⚙️ تنظیمات</li>
          <li>🔓 خروج</li>
        </ul>
      </div>
      <div style="flex:1; padding:10px;">
        <h4>محتوای اصلی پنل</h4>
        <p>📌 خلاصه مطالب، دوره‌ها، فروشگاه و ...</p>
      </div>
    </div>`;
});
