import Image from 'next/image';
import { Button } from 'ui';

import img from './_mock/airplane.png';

// atom, setAtom, title, size 주기
// 여기는 공용 모달

export const InformModal2 = ({ atom, title, size, setAtom }) => {
  return (
    <>
      {atom && (
        <div className='flex items-center justify-center'>
          <div
            className={`${
              size == 'small'
                ? 'h-[170px] w-[300px]'
                : size == 'big'
                ? 'h-[200px] w-[340px]'
                : 'h-[200px] w-[340px]'
            } border-primaryGray-200 flex flex-col items-center rounded-sm border-2`}
          >
            <span
              className={`material-icons-outlined ${
                size == 'small'
                  ? 'ml-[270px] mt-1'
                  : 'big'
                  ? 'ml-[310px] mt-1'
                  : 'ml-[310px] mt-1'
              } `}
              style={{
                color: 'gray',
                cursor: 'pointer',
                fontSize: '18px',
              }}
              onClick={() => setAtom(false)}
            >
              cancel
            </span>
            <div className='mt-1 flex'>
              <Image
                src={img}
                width={`${size == 'small' ? 30 : size == 'big' ? 50 : 150}`}
                alt='알림 모달 디폴트 이미지'
                priority
              />
            </div>
            <div
              className={`mt-4 font-semibold ${
                size == 'small'
                  ? 'text-[14px]'
                  : size == 'big'
                  ? 'text-[18px]'
                  : 'text-[18px]'
              }`}
            >
              {title}
            </div>
            <Button
              className={`border-primaryGray-200  border-2
              ${
                size == 'small'
                  ? 'mt-[20px] h-[27px] w-[120px] rounded-[13px] text-[10px]'
                  : 'big'
                  ? 'mt-[20px] h-[30px] w-[140px] rounded-[12px] text-[12px]'
                  : 'mt-[20px] h-[30px] w-[140px] rounded-[14px] text-[12px]'
              }  `}
              variant='roundednavy'
              size='xsm'
            >
              확인
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

// export const InformModalVariants = cva(``, {
//   variants: {
//     container: {
//       default:
//         'border border-primaryGray-200 flex flex-col items-center rounded-sm border-2',
//       small:
//         'h-[170px] w-[300px] border border-primaryGray-200 flex flex-col items-center rounded-sm border-2',
//       big: 'h-[200px] w-[340px] border border-primaryGray-200 flex flex-col items-center rounded-sm border-2',
//     },
//     icon: {
//       default: 'material-icons-outlined ',
//       small: 'ml-[270px] mt-1',
//       big: 'ml-[310px] mt-1',
//     },
//     image: {
//       default: '',
//       small: 'w-30',
//       big: 'w-50',
//     },
//     title: {
//       default: 'mt-4 font-semibold',
//       small: 'text-[14px]',
//       big: 'text-[18px]',
//     },
//     button: {
//       default: '',
//       small:
//         'mt-[20px] h-[27px] bg-white text-black w-[120px] rounded-[13px] text-[10px]',
//       big: 'mt-[20px] h-[30px] w-[140px] rounded-[12px] text-[12px]',
//     },
//   },
//   defaultVariants: {
//     container: 'small',
//     icon: 'small',
//     image: 'small',
//     title: 'small',
//     button: 'small',
//   },
// });
// type inform = typeof InformModalVariants;
// interface ModalProps extends inform {
//   label?: string;
//   atom?: boolean;
//   // eslint-disable-next-line no-unused-vars
//   setAtom?: (value: boolean) => void;
//   children: React.ReactNode;
// }

// export function InformModal({
//   container,
//   icon,
//   image,
//   label,
//   title,
//   button,
//   // atom,
//   // setAtom,
//   ...props
// }) {
//   return (
//     <>
//       {/* {atom && ( */}
//       <div className='flex items-center justify-center'>
//         <div className={cn(InformModalVariants({ container }))}>
//           <span
//             className={cn(InformModalVariants({ icon }))}
//             style={{
//               color: 'gray',
//               cursor: 'pointer',
//               fontSize: '18px',
//             }}
//             // onClick={() => setAtom(false)}
//           >
//             cancel
//           </span>
//           <div className='mt-1 flex'>
//             <Image
//               src={image}
//               className={cn(InformModalVariants({ image }))}
//               alt='알림 모달 디폴트 이미지'
//               priority
//             />
//           </div>
//           <div className={cn(InformModalVariants({ title }))}>{label}</div>
//           <div>{label}</div>
//           <Button className={cn(InformModalVariants({ button }))}>확인</Button>
//         </div>
//       </div>
//       {/* )} */}
//     </>
//   );
// }
// // export const InformModal: FC<ModalProps> = ({
// //   container,
// //   icon,
// //   image,
// //   label,
// //   title,
// //   button,
// //   atom,
// //   setAtom,
// //   ...props
// // }) => {
// //   return (
// //     <>
// //       {/* {atom && ( */}
// //       <div className='flex items-center justify-center'>
// //         <div className={cn(InformModalVariants({ container }))}>
// //           <span
// //             className={cn(InformModalVariants({ icon }))}
// //             style={{
// //               color: 'gray',
// //               cursor: 'pointer',
// //               fontSize: '18px',
// //             }}
// //             onClick={() => setAtom(false)}
// //           >
// //             cancel
// //           </span>
// //           <div className='mt-1 flex'>
// //             <Image
// //               src={image}
// //               className={cn(InformModalVariants({ image }))}
// //               alt='알림 모달 디폴트 이미지'
// //               priority
// //             />
// //           </div>
// //           <div className={cn(InformModalVariants({ title }))}>{label}</div>
// //           <div>{label}</div>
// //           <Button className={cn(InformModalVariants({ button }))}>확인</Button>
// //         </div>
// //       </div>
// //       {/* )} */}
// //     </>
// //   );
// // };
