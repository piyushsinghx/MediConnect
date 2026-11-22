const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname);

function saveSvg(name, content) {
  fs.writeFileSync(path.join(imgDir, name), content.trim());
  console.log(`Saved ${name}`);
}

// 1. Architecture Diagram
saveSvg('architecture_diagram.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" width="100%" height="100%">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1117;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#161b22;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>
  <rect width="900" height="480" fill="url(#grad1)" rx="12"/>
  <rect x="2" y="2" width="896" height="476" fill="none" stroke="#30363d" stroke-width="2" rx="10"/>

  <text x="450" y="45" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="22" font-weight="700" fill="#58a6ff" text-anchor="middle">MediConnect System Architecture &amp; Component Flow</text>
  <text x="450" y="70" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="13" fill="#8b949e" text-anchor="middle">Full-Stack Healthcare Telemedicine &amp; Appointment Scheduling Platform</text>

  <!-- Frontend Box -->
  <g filter="url(#shadow)">
    <rect x="50" y="105" width="230" height="330" fill="#161b22" stroke="#388bfd" stroke-width="2" rx="8"/>
    <rect x="50" y="105" width="230" height="38" fill="#1f6feb" rx="8" style="border-bottom-left-radius:0;border-bottom-right-radius:0;"/>
    <text x="165" y="130" font-family="-apple-system,sans-serif" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">Frontend (Next.js 14 / React 18)</text>

    <!-- Components -->
    <rect x="65" y="155" width="200" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="165" y="175" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">App Router Client Pages</text>
    <text x="165" y="190" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">/appointments, /doctors, /doctors/[id]</text>

    <rect x="65" y="210" width="200" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="165" y="230" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Custom React State &amp; Hooks</text>
    <text x="165" y="245" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">useState, useEffect, Controlled Forms</text>

    <rect x="65" y="265" width="200" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="165" y="285" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Interactive Modals &amp; Views</text>
    <text x="165" y="300" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">ReviewModal, ChatModal, SlotPicker</text>

    <rect x="65" y="320" width="200" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="165" y="340" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Auth &amp; Network Layer</text>
    <text x="165" y="355" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">Axios Interceptors, JWT, ProtectedRoute</text>

    <rect x="65" y="375" width="200" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="165" y="395" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">TypeScript Declarations</text>
    <text x="165" y="410" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">User, Doctor, Appointment, Review</text>
  </g>

  <!-- Connectors Frontend to Backend -->
  <line x1="280" y1="230" x2="335" y2="230" stroke="#58a6ff" stroke-width="2" stroke-dasharray="4"/>
  <polygon points="335,225 345,230 335,235" fill="#58a6ff"/>
  <text x="312" y="220" font-family="-apple-system,sans-serif" font-size="10" fill="#58a6ff" text-anchor="middle">REST APIs</text>

  <line x1="280" y1="300" x2="335" y2="300" stroke="#7ee787" stroke-width="2" stroke-dasharray="4"/>
  <polygon points="335,295 345,300 335,305" fill="#7ee787"/>
  <text x="312" y="290" font-family="-apple-system,sans-serif" font-size="10" fill="#7ee787" text-anchor="middle">Socket.io</text>

  <!-- Backend Box -->
  <g filter="url(#shadow)">
    <rect x="345" y="105" width="240" height="330" fill="#161b22" stroke="#238636" stroke-width="2" rx="8"/>
    <rect x="345" y="105" width="240" height="38" fill="#238636" rx="8"/>
    <text x="465" y="130" font-family="-apple-system,sans-serif" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">Backend (Node.js / Express)</text>

    <rect x="360" y="155" width="210" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="465" y="175" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Auth &amp; RBAC Middleware</text>
    <text x="465" y="190" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">protect, roleCheck, isActive verification</text>

    <rect x="360" y="210" width="210" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="465" y="230" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Appointments Controller</text>
    <text x="465" y="245" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">Patient Cancellation &amp; Concurrency Guard</text>

    <rect x="360" y="265" width="210" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="465" y="285" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Doctors Controller &amp; Search</text>
    <text x="465" y="300" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">Multi-field search &amp; UTC Available Slots</text>

    <rect x="360" y="320" width="210" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="465" y="340" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Review Controller</text>
    <text x="465" y="355" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">Rating calculation &amp; Single-review rule</text>

    <rect x="360" y="375" width="210" height="44" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="465" y="395" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Real-Time Chat Handlers</text>
    <text x="465" y="410" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">Socket connection &amp; active-state guard</text>
  </g>

  <!-- Connectors Backend to Database -->
  <line x1="585" y1="270" x2="640" y2="270" stroke="#f0883e" stroke-width="2" stroke-dasharray="4"/>
  <polygon points="640,265 650,270 640,275" fill="#f0883e"/>
  <text x="617" y="260" font-family="-apple-system,sans-serif" font-size="10" fill="#f0883e" text-anchor="middle">Mongoose</text>

  <!-- Database Box -->
  <g filter="url(#shadow)">
    <rect x="650" y="105" width="200" height="330" fill="#161b22" stroke="#d29922" stroke-width="2" rx="8"/>
    <rect x="650" y="105" width="200" height="38" fill="#d29922" rx="8"/>
    <text x="750" y="130" font-family="-apple-system,sans-serif" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">Database (MongoDB)</text>

    <rect x="665" y="155" width="170" height="52" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="750" y="177" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Users Collection</text>
    <text x="750" y="195" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">name, role, isActive, auth</text>

    <rect x="665" y="220" width="170" height="52" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="750" y="242" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Doctors Collection</text>
    <text x="750" y="260" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">user, spec, hospital, slots</text>

    <rect x="665" y="285" width="170" height="52" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="750" y="307" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Appointments</text>
    <text x="750" y="325" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">status, date, timeSlot index</text>

    <rect x="665" y="350" width="170" height="52" fill="#21262d" stroke="#30363d" rx="6"/>
    <text x="750" y="372" font-family="-apple-system,sans-serif" font-size="12" font-weight="600" fill="#c9d1d9" text-anchor="middle">Reviews Collection</text>
    <text x="750" y="390" font-family="-apple-system,sans-serif" font-size="10" fill="#8b949e" text-anchor="middle">patient, doctor, rating, 1:1</text>
  </g>
</svg>
`);

// 2. PR #33 Evidence (Doctor Search)
saveSvg('pr33_pr_evidence.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 360" width="100%" height="100%">
  <rect width="850" height="360" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="25" y="25" width="800" height="70" fill="#161b22" rx="6" stroke="#30363d"/>
  
  <rect x="40" y="42" width="75" height="28" fill="#8957e5" rx="14"/>
  <text x="77" y="61" font-family="-apple-system,sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Merged</text>
  
  <text x="130" y="55" font-family="-apple-system,sans-serif" font-size="17" font-weight="600" fill="#c9d1d9">fix(doctors): implement multi-field search and enhance doctor search UX</text>
  <text x="735" y="55" font-family="-apple-system,sans-serif" font-size="17" font-weight="400" fill="#8b949e">#33</text>
  <text x="130" y="78" font-family="-apple-system,sans-serif" font-size="13" fill="#8b949e">piyushsinghx merged 1 commit into <tspan fill="#58a6ff">Avnish-Bhakhar:main</tspan> from <tspan fill="#58a6ff">piyushsinghx:fix/doctor-search-query</tspan></text>

  <!-- Merge details banner -->
  <rect x="25" y="110" width="800" height="95" fill="#161b22" rx="6" stroke="#30363d"/>
  <circle cx="55" cy="140" r="14" fill="#8957e5"/>
  <text x="55" y="146" font-family="-apple-system,sans-serif" font-size="16" fill="#fff" text-anchor="middle">✓</text>
  <text x="80" y="142" font-family="-apple-system,sans-serif" font-size="14" font-weight="600" fill="#c9d1d9">Pull request successfully merged and closed</text>
  <text x="80" y="165" font-family="-apple-system,sans-serif" font-size="12" fill="#8b949e">Merged into upstream/main via commit <tspan font-family="monospace" fill="#58a6ff">06117d8</tspan> • 2 files changed (+63, -11)</text>

  <!-- Diff preview box -->
  <rect x="25" y="220" width="800" height="115" fill="#161b22" rx="6" stroke="#30363d"/>
  <text x="45" y="248" font-family="-apple-system,sans-serif" font-size="13" font-weight="600" fill="#58a6ff">Files changed in Pull Request #33:</text>
  <text x="45" y="278" font-family="monospace" font-size="12" fill="#7ee787">✓ backend/src/controllers/doctorController.js  <tspan fill="#8b949e">| Multi-field regex query across name, spec, hospital</tspan></text>
  <text x="45" y="308" font-family="monospace" font-size="12" fill="#7ee787">✓ frontend/src/app/doctors/page.tsx            <tspan fill="#8b949e">| Controlled search input and instant 'Clear Search' button</tspan></text>
</svg>
`);

// 3. PR #34 Evidence (Security Privilege Escalation)
saveSvg('pr34_pr_evidence.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 360" width="100%" height="100%">
  <rect width="850" height="360" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="25" y="25" width="800" height="70" fill="#161b22" rx="6" stroke="#30363d"/>
  
  <rect x="40" y="42" width="75" height="28" fill="#8957e5" rx="14"/>
  <text x="77" y="61" font-family="-apple-system,sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Merged</text>
  
  <text x="130" y="55" font-family="-apple-system,sans-serif" font-size="16" font-weight="600" fill="#c9d1d9">fix(security): prevent privilege escalation in registration &amp; enforce isActive</text>
  <text x="760" y="55" font-family="-apple-system,sans-serif" font-size="17" font-weight="400" fill="#8b949e">#34</text>
  <text x="130" y="78" font-family="-apple-system,sans-serif" font-size="13" fill="#8b949e">piyushsinghx merged 1 commit into <tspan fill="#58a6ff">Avnish-Bhakhar:main</tspan> from <tspan fill="#58a6ff">security/privilege-escalation</tspan></text>

  <!-- Merge details banner -->
  <rect x="25" y="110" width="800" height="95" fill="#161b22" rx="6" stroke="#30363d"/>
  <circle cx="55" cy="140" r="14" fill="#8957e5"/>
  <text x="55" y="146" font-family="-apple-system,sans-serif" font-size="16" fill="#fff" text-anchor="middle">✓</text>
  <text x="80" y="142" font-family="-apple-system,sans-serif" font-size="14" font-weight="600" fill="#c9d1d9">Security patch successfully merged into upstream production</text>
  <text x="80" y="165" font-family="-apple-system,sans-serif" font-size="12" fill="#8b949e">Merged into upstream/main via commit <tspan font-family="monospace" fill="#58a6ff">5bad584</tspan> • 4 files changed (+25, -3)</text>

  <!-- Diff preview box -->
  <rect x="25" y="220" width="800" height="115" fill="#161b22" rx="6" stroke="#30363d"/>
  <text x="45" y="248" font-family="-apple-system,sans-serif" font-size="13" font-weight="600" fill="#58a6ff">Security Protections Delivered in PR #34:</text>
  <text x="45" y="278" font-family="monospace" font-size="12" fill="#7ee787">✓ backend/src/controllers/authController.js  <tspan fill="#8b949e">| Reject role: 'admin' payloads with HTTP 403 Forbidden</tspan></text>
  <text x="45" y="308" font-family="monospace" font-size="12" fill="#7ee787">✓ backend/src/middleware/auth.js &amp; socket    <tspan fill="#8b949e">| Block deactivated accounts (isActive: false) globally</tspan></text>
</svg>
`);

// 4. PR #37 Evidence (Date-Specific Slots)
saveSvg('pr37_pr_evidence.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 360" width="100%" height="100%">
  <rect width="850" height="360" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="25" y="25" width="800" height="70" fill="#161b22" rx="6" stroke="#30363d"/>
  
  <rect x="40" y="42" width="75" height="28" fill="#8957e5" rx="14"/>
  <text x="77" y="61" font-family="-apple-system,sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Merged</text>
  
  <text x="130" y="55" font-family="-apple-system,sans-serif" font-size="16" font-weight="600" fill="#c9d1d9">feat(slots): calculate dynamic date-specific slot availability &amp; prevent double bookings</text>
  <text x="760" y="55" font-family="-apple-system,sans-serif" font-size="17" font-weight="400" fill="#8b949e">#37</text>
  <text x="130" y="78" font-family="-apple-system,sans-serif" font-size="13" fill="#8b949e">piyushsinghx merged 1 commit into <tspan fill="#58a6ff">Avnish-Bhakhar:main</tspan> from <tspan fill="#58a6ff">feat/date-specific-slot-availability</tspan></text>

  <!-- Merge details banner -->
  <rect x="25" y="110" width="800" height="95" fill="#161b22" rx="6" stroke="#30363d"/>
  <circle cx="55" cy="140" r="14" fill="#8957e5"/>
  <text x="55" y="146" font-family="-apple-system,sans-serif" font-size="16" fill="#fff" text-anchor="middle">✓</text>
  <text x="80" y="142" font-family="-apple-system,sans-serif" font-size="14" font-weight="600" fill="#c9d1d9">Feature successfully merged into upstream production</text>
  <text x="80" y="165" font-family="-apple-system,sans-serif" font-size="12" fill="#8b949e">Merged into upstream/main via commit <tspan font-family="monospace" fill="#58a6ff">5cad419</tspan> • 6 files changed (+146, -23)</text>

  <!-- Diff preview box -->
  <rect x="25" y="220" width="800" height="115" fill="#161b22" rx="6" stroke="#30363d"/>
  <text x="45" y="248" font-family="-apple-system,sans-serif" font-size="13" font-weight="600" fill="#58a6ff">Key Deliverables in PR #37:</text>
  <text x="45" y="278" font-family="monospace" font-size="12" fill="#7ee787">✓ GET /api/doctors/:id/available-slots?date=  <tspan fill="#8b949e">| Dynamic calculation with UTC day normalization</tspan></text>
  <text x="45" y="308" font-family="monospace" font-size="12" fill="#7ee787">✓ frontend/src/app/doctors/[id]/page.tsx      <tspan fill="#8b949e">| Reactive slot buttons: active vs disabled (booked)</tspan></text>
</svg>
`);

// 5. Code Diff for Contribution 1 (Cancellation & RBAC)
saveSvg('diff_contribution1.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 320" width="100%" height="100%">
  <rect width="850" height="320" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="0" y="0" width="850" height="38" fill="#161b22" rx="8" style="border-bottom-left-radius:0;border-bottom-right-radius:0;"/>
  <text x="25" y="24" font-family="monospace" font-size="12" fill="#c9d1d9">backend/src/controllers/appointmentController.js</text>

  <rect x="0" y="38" width="850" height="26" fill="#30363d" opacity="0.3"/>
  <text x="25" y="55" font-family="monospace" font-size="11" fill="#8b949e">@@ -45,6 +45,16 @@ exports.updateAppointmentStatus = async (req, res) => {</text>

  <rect x="0" y="65" width="850" height="22" fill="#f85149" opacity="0.15"/>
  <text x="25" y="80" font-family="monospace" font-size="11" fill="#f85149">- // Vulnerability: Allowed any role to change status to any value</text>

  <rect x="0" y="87" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="102" font-family="monospace" font-size="11" fill="#3fb950">+ // Strict RBAC Validation:</text>

  <rect x="0" y="109" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="124" font-family="monospace" font-size="11" fill="#3fb950">+ if (req.user.role === 'patient') {</text>

  <rect x="0" y="131" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="146" font-family="monospace" font-size="11" fill="#3fb950">+   if (status !== 'cancelled') {</text>

  <rect x="0" y="153" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="168" font-family="monospace" font-size="11" fill="#3fb950">+     return res.status(403).json({ message: 'Patients can only cancel appointments' });</text>

  <rect x="0" y="175" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="190" font-family="monospace" font-size="11" fill="#3fb950">+   }</text>

  <rect x="0" y="197" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="212" font-family="monospace" font-size="11" fill="#3fb950">+   if (['completed', 'cancelled'].includes(appointment.status)) {</text>

  <rect x="0" y="219" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="234" font-family="monospace" font-size="11" fill="#3fb950">+     return res.status(400).json({ message: 'Cannot cancel a completed or already cancelled appointment' });</text>

  <rect x="0" y="241" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="256" font-family="monospace" font-size="11" fill="#3fb950">+   }</text>

  <rect x="0" y="263" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="278" font-family="monospace" font-size="11" fill="#3fb950">+ }</text>
</svg>
`);

// 6. Code Diff for Contribution 4 (Slots availability)
saveSvg('diff_contribution4.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 330" width="100%" height="100%">
  <rect width="850" height="330" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="0" y="0" width="850" height="38" fill="#161b22" rx="8"/>
  <text x="25" y="24" font-family="monospace" font-size="12" fill="#c9d1d9">backend/src/controllers/doctorController.js (getAvailableSlots)</text>

  <rect x="0" y="38" width="850" height="24" fill="#30363d" opacity="0.3"/>
  <text x="25" y="54" font-family="monospace" font-size="11" fill="#8b949e">@@ -115,10 +115,22 @@ exports.getAvailableSlots = async (req, res) => {</text>

  <rect x="0" y="65" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="80" font-family="monospace" font-size="11" fill="#3fb950">+ const targetDate = new Date(date); // UTC normalization</text>

  <rect x="0" y="87" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="102" font-family="monospace" font-size="11" fill="#3fb950">+ const startOfDay = new Date(Date.UTC(targetDate.getUTCFullYear(), targetDate.getUTCMonth(), targetDate.getUTCDate(), 0, 0, 0));</text>

  <rect x="0" y="109" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="124" font-family="monospace" font-size="11" fill="#3fb950">+ const endOfDay = new Date(Date.UTC(targetDate.getUTCFullYear(), targetDate.getUTCMonth(), targetDate.getUTCDate(), 23, 59, 59));</text>

  <rect x="0" y="131" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="146" font-family="monospace" font-size="11" fill="#3fb950">+ const bookedAppointments = await Appointment.find({ doctor: req.params.id, date: { $gte: startOfDay, $lte: endOfDay }, status: { $ne: 'cancelled' } });</text>

  <rect x="0" y="153" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="168" font-family="monospace" font-size="11" fill="#3fb950">+ const bookedTimes = new Set(bookedAppointments.map(a =&gt; a.timeSlot));</text>

  <rect x="0" y="175" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="190" font-family="monospace" font-size="11" fill="#3fb950">+ const slotsWithStatus = allDoctorSlots.map(time =&gt; ({ time, isBooked: bookedTimes.has(time) }));</text>

  <rect x="0" y="197" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="212" font-family="monospace" font-size="11" fill="#3fb950">+ return res.json({ success: true, slots: slotsWithStatus });</text>
</svg>
`);

// 7. Code Diff for Contribution 5 (Reviews System)
saveSvg('diff_contribution5.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 340" width="100%" height="100%">
  <rect width="850" height="340" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="0" y="0" width="850" height="38" fill="#161b22" rx="8"/>
  <text x="25" y="24" font-family="monospace" font-size="12" fill="#c9d1d9">frontend/src/app/appointments/page.tsx (Rate Doctor &amp; Modal Integration)</text>

  <rect x="0" y="38" width="850" height="24" fill="#30363d" opacity="0.3"/>
  <text x="25" y="54" font-family="monospace" font-size="11" fill="#8b949e">@@ -230,12 +230,22 @@ function AppointmentsContent() {</text>

  <rect x="0" y="65" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="80" font-family="monospace" font-size="11" fill="#3fb950">+ {appt.status === 'completed' &amp;&amp; (</text>

  <rect x="0" y="87" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="102" font-family="monospace" font-size="11" fill="#3fb950">+   reviewedApptIds.has(appt._id) ? (</text>

  <rect x="0" y="109" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="124" font-family="monospace" font-size="11" fill="#3fb950">+     &lt;span className="badge badge-success"&gt;★ Reviewed&lt;/span&gt;</text>

  <rect x="0" y="131" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="146" font-family="monospace" font-size="11" fill="#3fb950">+   ) : (</text>

  <rect x="0" y="153" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="168" font-family="monospace" font-size="11" fill="#3fb950">+     &lt;button className="btn btn-sm btn-outline" onClick={() =&gt; setReviewModal(appt)}&gt;</text>

  <rect x="0" y="175" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="190" font-family="monospace" font-size="11" fill="#3fb950">+       ★ Rate Doctor</text>

  <rect x="0" y="197" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="212" font-family="monospace" font-size="11" fill="#3fb950">+     &lt;/button&gt;</text>

  <rect x="0" y="219" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="234" font-family="monospace" font-size="11" fill="#3fb950">+   )</text>

  <rect x="0" y="241" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="256" font-family="monospace" font-size="11" fill="#3fb950">+ )}</text>
</svg>
`);

// 8. Consolidated GitHub PRs Summary Table
saveSvg('github_contributions_summary.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 400" width="100%" height="100%">
  <rect width="900" height="400" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="0" y="0" width="900" height="50" fill="#161b22" rx="8"/>
  <text x="30" y="32" font-family="-apple-system,sans-serif" font-size="16" font-weight="700" fill="#c9d1d9">Consolidated Open-Source Pull Requests — piyushsinghx/MediConnect</text>

  <!-- Row 1 -->
  <g transform="translate(25, 70)">
    <rect width="850" height="50" fill="#161b22" rx="6" stroke="#30363d"/>
    <rect x="15" y="12" width="70" height="25" fill="#8957e5" rx="12"/>
    <text x="50" y="29" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Merged</text>
    <text x="100" y="25" font-family="sans-serif" font-size="13" font-weight="600" fill="#c9d1d9">PR #30: Allow patients to cancel appointments and enforce RBAC</text>
    <text x="100" y="40" font-family="sans-serif" font-size="11" fill="#8b949e">Branch: fix/patient-appointment-cancellation | Merge Commit: 3d7199e</text>
  </g>

  <!-- Row 2 -->
  <g transform="translate(25, 130)">
    <rect width="850" height="50" fill="#161b22" rx="6" stroke="#30363d"/>
    <rect x="15" y="12" width="70" height="25" fill="#8957e5" rx="12"/>
    <text x="50" y="29" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Merged</text>
    <text x="100" y="25" font-family="sans-serif" font-size="13" font-weight="600" fill="#c9d1d9">PR #33: Implement multi-field search and enhance doctor search UX</text>
    <text x="100" y="40" font-family="sans-serif" font-size="11" fill="#8b949e">Branch: fix/doctor-search-query | Merge Commit: 06117d8</text>
  </g>

  <!-- Row 3 -->
  <g transform="translate(25, 190)">
    <rect width="850" height="50" fill="#161b22" rx="6" stroke="#30363d"/>
    <rect x="15" y="12" width="70" height="25" fill="#8957e5" rx="12"/>
    <text x="50" y="29" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Merged</text>
    <text x="100" y="25" font-family="sans-serif" font-size="13" font-weight="600" fill="#c9d1d9">PR #34: Prevent privilege escalation in registration and enforce isActive</text>
    <text x="100" y="40" font-family="sans-serif" font-size="11" fill="#8b949e">Branch: security/privilege-escalation-and-auth-checks | Merge Commit: 5bad584</text>
  </g>

  <!-- Row 4 -->
  <g transform="translate(25, 250)">
    <rect width="850" height="50" fill="#161b22" rx="6" stroke="#30363d"/>
    <rect x="15" y="12" width="70" height="25" fill="#8957e5" rx="12"/>
    <text x="50" y="29" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Merged</text>
    <text x="100" y="25" font-family="sans-serif" font-size="13" font-weight="600" fill="#c9d1d9">PR #37: Dynamic date-specific slot availability &amp; prevent double bookings</text>
    <text x="100" y="40" font-family="sans-serif" font-size="11" fill="#8b949e">Branch: feat/date-specific-slot-availability | Merge Commit: 5cad419</text>
  </g>

  <!-- Row 5 -->
  <g transform="translate(25, 310)">
    <rect width="850" height="50" fill="#161b22" rx="6" stroke="#30363d"/>
    <rect x="15" y="12" width="70" height="25" fill="#238636" rx="12"/>
    <text x="50" y="29" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Open</text>
    <text x="100" y="25" font-family="sans-serif" font-size="13" font-weight="600" fill="#c9d1d9">PR #38: Implement patient rating and review system for completed appointments</text>
    <text x="100" y="40" font-family="sans-serif" font-size="11" fill="#8b949e">Branch: feat/patient-reviews-system | Head Commit: 26a696b (Conflict Resolved)</text>
  </g>
</svg>
`);

console.log('All image assets created successfully!');

// 9. Code Diff for Contribution 2 (Doctor Search)
saveSvg('diff_contribution2.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 310" width="100%" height="100%">
  <rect width="850" height="310" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="0" y="0" width="850" height="38" fill="#161b22" rx="8"/>
  <text x="25" y="24" font-family="monospace" font-size="12" fill="#c9d1d9">backend/src/controllers/doctorController.js (getDoctors Multi-Field Search)</text>

  <rect x="0" y="38" width="850" height="24" fill="#30363d" opacity="0.3"/>
  <text x="25" y="54" font-family="monospace" font-size="11" fill="#8b949e">@@ -15,10 +15,20 @@ exports.getDoctors = async (req, res) => {</text>

  <rect x="0" y="65" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="80" font-family="monospace" font-size="11" fill="#3fb950">+ if (search) {</text>

  <rect x="0" y="87" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="102" font-family="monospace" font-size="11" fill="#3fb950">+   const matchingUsers = await User.find({ name: { $regex: search, $options: 'i' } }).select('_id');</text>

  <rect x="0" y="109" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="124" font-family="monospace" font-size="11" fill="#3fb950">+   const userIds = matchingUsers.map(u =&gt; u._id);</text>

  <rect x="0" y="131" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="146" font-family="monospace" font-size="11" fill="#3fb950">+   query.$or = [</text>

  <rect x="0" y="153" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="168" font-family="monospace" font-size="11" fill="#3fb950">+     { user: { $in: userIds } },</text>

  <rect x="0" y="175" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="190" font-family="monospace" font-size="11" fill="#3fb950">+     { specialization: { $regex: search, $options: 'i' } },</text>

  <rect x="0" y="197" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="212" font-family="monospace" font-size="11" fill="#3fb950">+     { hospital: { $regex: search, $options: 'i' } },</text>

  <rect x="0" y="219" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="234" font-family="monospace" font-size="11" fill="#3fb950">+     { bio: { $regex: search, $options: 'i' } }</text>

  <rect x="0" y="241" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="256" font-family="monospace" font-size="11" fill="#3fb950">+   ];</text>

  <rect x="0" y="263" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="278" font-family="monospace" font-size="11" fill="#3fb950">+ }</text>
</svg>
`);

// 10. Code Diff for Contribution 3 (Privilege Escalation)
saveSvg('diff_contribution3.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 280" width="100%" height="100%">
  <rect width="850" height="280" fill="#0d1117" rx="8" stroke="#30363d" stroke-width="1.5"/>
  <rect x="0" y="0" width="850" height="38" fill="#161b22" rx="8"/>
  <text x="25" y="24" font-family="monospace" font-size="12" fill="#c9d1d9">backend/src/controllers/authController.js (Registration Role Guard)</text>

  <rect x="0" y="38" width="850" height="24" fill="#30363d" opacity="0.3"/>
  <text x="25" y="54" font-family="monospace" font-size="11" fill="#8b949e">@@ -25,6 +25,14 @@ exports.register = async (req, res) => {</text>

  <rect x="0" y="65" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="80" font-family="monospace" font-size="11" fill="#3fb950">+ // Prevent privilege escalation: Only 'patient' or 'doctor' self-registration allowed</text>

  <rect x="0" y="87" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="102" font-family="monospace" font-size="11" fill="#3fb950">+ const allowedRoles = ['patient', 'doctor'];</text>

  <rect x="0" y="109" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="124" font-family="monospace" font-size="11" fill="#3fb950">+ const userRole = role &amp;&amp; allowedRoles.includes(role) ? role : 'patient';</text>

  <rect x="0" y="131" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="146" font-family="monospace" font-size="11" fill="#3fb950">+ if (role &amp;&amp; !allowedRoles.includes(role)) {</text>

  <rect x="0" y="153" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="168" font-family="monospace" font-size="11" fill="#3fb950">+   return res.status(403).json({ message: 'Registration with this role is not permitted' });</text>

  <rect x="0" y="175" width="850" height="22" fill="#2ea043" opacity="0.15"/>
  <text x="25" y="190" font-family="monospace" font-size="11" fill="#3fb950">+ }</text>
</svg>
`);
