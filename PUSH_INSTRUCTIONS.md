# GitHub Push 방법

현재 코드를 GitHub에 업로드하는 두 가지 방법이 있습니다:

## 방법 1: 이 프로젝트 폴더 직접 Push (권장)

이미 Git 설정이 완료되어 있습니다. 아래 명령어만 실행하세요:

```bash
# 현재 디렉토리에서 실행
git push -u origin main
```

GitHub 인증이 요청되면:
- **Username**: `minchulpack`
- **Password**: Personal Access Token 사용 (비밀번호 아님)

### Personal Access Token 생성 방법:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" → "Generate new token (classic)"
3. Note: `onewol-company deployment`
4. Expiration: 90 days (또는 원하는 기간)
5. Select scopes: `repo` 체크
6. "Generate token"
7. 생성된 토큰 복사 (한 번만 표시됨!)
8. 비밀번호 대신 이 토큰 입력

## 방법 2: GitHub Desktop 사용 (더 쉬움)

1. **GitHub Desktop 다운로드**
   - https://desktop.github.com

2. **프로젝트 추가**
   - File → Add Local Repository
   - 현재 프로젝트 폴더 선택

3. **Push**
   - "Publish repository" 버튼 클릭
   - 또는 상단의 "Push origin" 클릭

## 방법 3: 코드 압축 후 GitHub 웹에서 업로드

만약 위 방법들이 어려우면:

1. 이 폴더 전체를 ZIP으로 압축
2. GitHub 레포지토리 페이지에서 "uploading an existing file" 클릭
3. ZIP 파일 압축 해제 후 파일들 드래그 앤 드롭

---

## Push 성공 확인

Push 성공 후:
1. https://github.com/minchulpack/onewol-company 접속
2. 파일들이 올라갔는지 확인
3. 다음 단계: Vercel 배포로 이동

## 다음: Vercel 배포

GitHub에 코드가 올라간 후:

1. **Vercel 접속**: https://vercel.com
2. **GitHub로 로그인**
3. **New Project** → `onewol-company` 선택
4. **Deploy** 클릭
5. 완료!

배포 URL: `https://onewol-company.vercel.app`

---

## 문제 해결

**"Permission denied" 에러 시:**
- Personal Access Token 사용하세요 (위 방법 참고)

**"Repository not found" 에러 시:**
- 레포지토리가 실제로 생성되었는지 확인
- URL이 정확한지 확인: `https://github.com/minchulpack/onewol-company`

**그래도 안 되면:**
- GitHub Desktop 사용 (가장 쉬움)
