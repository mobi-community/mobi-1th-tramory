// 폴더 및 파일 구조관련 메모

// function Title({
//   steps,
// }: {
//   steps: {
//     title: string;
//     active: boolean;
//   }[];
// }) {
//   return (
//     <div>
//       <div className={steps === 'select' ? '' : ''}>Step1</div>
//       <div className={steps === 'add' ? '' : ''}>Step2</div>
//     </div>
//   );
// }

// function Content({
//   children,
//   onPrev,
//   onNext,
//   ...props
// }: ComponentProps<'div'> & {
//   onPrev: () => void;
//   onNext: () => void;
// }) {
//   return (
//     <div {...props}>
//       <div onClick={onPrev}>뒤로</div>
//       {children}
//       <div onClick={onNext}>앞으로</div>
//     </div>
//   );
// }

// function Page() {
//   const router = useRouter();
//   return (
//     <div>
//       <Title steps='add' />
//       <Content
//         onPrev={() => {
//           router.push('/123213');
//         }}
//       >
//         내용
//       </Content>
//     </div>
//   );
// }
