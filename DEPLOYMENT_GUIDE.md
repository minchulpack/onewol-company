# O_NEWOL COMPANY - Deployment Guide

## 📋 배포 단계

### 1. GitHub 레포지토리 생성

1. **GitHub에 로그인**
   - https://github.com 접속
   - 계정: `minchulpack`

2. **새 레포지토리 생성**
   - 우측 상단 `+` 클릭 → `New repository`
   - Repository name: `onewol-company` (또는 원하는 이름)
   - Description: "O_NEWOL COMPANY - Korean Cosmetics OEM/ODM Website"
   - Public 또는 Private 선택
   - **Initialize this repository with: 아무것도 체크하지 마세요** (이미 코드가 있음)
   - `Create repository` 클릭

3. **생성된 레포지토리 URL 확인**
   - 예: `https://github.com/minchulpack/onewol-company.git`

### 2. Git Remote 연결 및 Push

터미널에서 아래 명령어를 실행하세요:

```bash
# Remote 추가 (레포지토리 이름을 실제로 생성한 이름으로 변경)
git remote add origin https://github.com/minchulpack/onewol-company.git

# Push
git push -u origin main
```

### 3. Vercel 배포

1. **Vercel 계정 생성/로그인**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **새 프로젝트 생성**
   - Dashboard → `Add New...` → `Project`
   - `Import Git Repository` → 방금 생성한 레포지토리 선택
   - `Import` 클릭

3. **프로젝트 설정**
   - Framework Preset: `Vite` (자동 감지됨)
   - Build Command: `pnpm build` (자동 설정됨)
   - Output Directory: `dist` (자동 설정됨)
   - Install Command: `pnpm install` (자동 설정됨)
   - **Deploy** 클릭

4. **배포 완료**
   - 약 1-2분 후 배포 완료
   - Vercel이 제공하는 URL 확인 (예: `https://onewol-company.vercel.app`)

### 4. 커스텀 도메인 연결

1. **도메인 추가**
   - Vercel 프로젝트 → `Settings` → `Domains`
   - 도메인 입력 (예: `onewol.com`, `www.onewol.com`)
   - `Add` 클릭

2. **DNS 설정**
   - 도메인 등록업체(가비아, 후이즈 등)에서 DNS 레코드 추가:
   
   **A 레코드** (루트 도메인용):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **CNAME 레코드** (www 서브도메인용):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL 인증서**
   - Vercel이 자동으로 Let's Encrypt SSL 인증서 발급 (몇 분 소요)
   - 완료되면 HTTPS 자동 적용

### 5. 환경 변수 설정 (선택사항)

현재는 환경 변수가 필요 없지만, 나중에 API 키 등이 필요하면:

1. Vercel 프로젝트 → `Settings` → `Environment Variables`
2. 변수 추가 후 재배포

### 6. 자동 배포

- GitHub에 push할 때마다 Vercel이 자동으로 재배포
- `main` 브랜치 = Production
- 다른 브랜치 = Preview 배포

## 🔄 코드 업데이트 방법

```bash
# 파일 수정 후
git add .
git commit -m "Update: 변경 내용"
git push
```

→ Vercel이 자동으로 감지하고 재배포

## 🌐 접속 URL

배포 후 다음 URL로 접속 가능:
- Vercel 기본 URL: `https://[프로젝트명].vercel.app`
- 한국어: `https://[도메인]/`
- 영어: `https://[도메인]/en`
- 개별 페이지: `/about`, `/services`, `/contact` 등

## 📝 Next.js 전환 준비사항

현재는 Vite + React로 작동하지만, 나중에 Next.js로 전환할 때:

1. 폴더 구조가 이미 Next.js App Router 형태로 준비됨
2. `src/app/App.tsx`의 주석 참고
3. Vercel은 Next.js도 자동 감지 및 최적화

## 🆘 문제 해결

**배포 실패 시:**
1. Vercel 로그 확인
2. Build Command가 `pnpm build`인지 확인
3. Node.js 버전이 18 이상인지 확인

**도메인 연결 안될 시:**
1. DNS 전파 시간 기다리기 (최대 48시간, 보통 1-2시간)
2. DNS 설정 재확인
3. Vercel에서 도메인 상태 확인
