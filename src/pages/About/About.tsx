import styled from 'styled-components';

const Title = styled.div`
  letter-spacing: 2px;
`;

const SectionHeader = ({ title = '' }) => {
    return (
      <div className="w-full mb-10 mt-5">
        <div className="w-full border border-gray-300"></div>
        <Title className="m-2 uppercase font-header text-darkGray">{title}</Title>
      </div>
    );
  };

const AboutContainer = styled.div`
  padding: 0 20px;
`;

function About() {

  return (
    <div className="leading-relaxed">
      <SectionHeader title="About" />
      <AboutContainer>
      <h3 className="font-header text-2xl my-4">OASIS란?</h3>
      <p>
        OASIS는 지역 사회 속 아티스트, 공간 운영자(호스트), 그리고 관객들을 연결하는 예술 플랫폼입니다. 플랫폼의 주요 목표는 (1) 아티스트의 작품 
        전시를 위한 공간들을 더 많이 만드는 것, (2) 공간 운영자(호스트)들이 공간 사용 가능 여부를 알리면서, 또 원하는 작품 유형을 찾도록하는 독특한 
        채널을 제공하는 것,  (3) 관객에게 현재 전시 중인 작품을 탐색하고 경험할 수 있는 수단을 제공하며, 지역 창작자들과 소통할 수 있는 수단을 제공하는 것입니다.
      </p>
      <h3 className="font-header text-2xl mt-6 mb-4">물리-디지털적 연결</h3>
      <p>
        OASIS는 온라인 커뮤니티와 지역 공동체 사이의 접점에서, 아티스트, 호스트, 그리고 관객 간의 상호 작용을 지원합니다. 우리는 OASIS가 도시 구조 속에서 예술 
        전시에 적합한 틈새 공간을 열고, 이러한 공간을 향한 "미세-공공(micro-public)"의 움직임을 촉진하기를 바랍니다. 이는 OASIS의 기본 자세입니다. 물론, 
        웹앱이 OASIS의 중요한 구성 요소이긴 합니다. 하지만, 우리는 이 플랫폼이 "예술을 위한 (또 다른) 소셜 네트워크"라기 보다는, 모바일 및 웹기술을 통해 공동체 
        내에서 대화, 상호 작용, 그리고 창작의 가능성을 타진하는, 어떤 “물리-디지털적 연결” 그 자체로서 이해되길 바랍니다.
      </p>
      <h3 className="font-header text-2xl mt-6 mb-4">참여하고 싶나요?</h3>
      <p>
        OASIS는 현재 테스트 단계에 있습니다. 지역 아티스트, 공간 운영자(호스트), 공동체 구성원이거나, 플랫폼 테스트 참여에 관심 있다면, <a className="text-gray-400 underline" href={`/register`}>회원가입(register)</a>하여         
      </p>
      <br/>
      <p>
        OASIS 계정을 생성하세요. OASIS는 전시 이벤트(실물 및 가상 모두)의 기획, 홍보를 위한, 아티스트와 호스트 간의 의사 소통을 돕고자 합니다. 이러한 이벤트들은 모두 OASIS의 공식 홈페이지를 채워나갈 것입니다.
      </p>
      
      <h3 className="font-header text-2xl mt-6 mb-4">가상 이벤트 및 공간</h3>
      <p>
        COVID-19 팬데믹이 예술계 현실에 극적인 영향을 준 것을 잘 알고 있습니다. 이러한 상황을 고려하여, <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://hubs.mozilla.com/">Mozilla Hubs</a>,
        <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://www.gather.town/">Gather Town</a> 및
         <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://matterport.com/">Matterport</a> 플랫폼 기반의 가상 이벤트 및 공간 생성 기능을 
        OASIS 웹사이트에 새로이 구현했습니다. 아티스트, 호스트, 그리고 관객들이 서로 안전하게 만나고, 예술과 공동체를 경험할 수 있게 하고자, OASIS의 각 이벤트에는 맞춤형 Hubs 룸에 
        연결하는 옵션을 통해 작품을 3D 인터랙티브 환경 속에서 감상할 수 있도록 합니다. 또, 페이지에서 Matterport 공간과 연결할 수 있는 옵션이 있어, 관객이 실물 장소를 가상으로 쉽게 
        탐색하고, 또 컴퓨터와 휴대전화 상에서 고해상도로 작품을 볼 수 있습니다. 별도의 가상 이벤트나 공간을 만드는 데에 관심이 있다면 <a href="mailto:info@oasis.art"><b>info@oasis.art</b></a>로 
        이메일을 보내주세요.
      </p>

      <h3 className="font-header text-2xl mt-6 mb-4">지원</h3>
      <p>
        OASIS는Cambridge Arts Council의  <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://www.cambridgema.gov/arts/programs/grants">예술가 지원 프로그램(Artists Grant program)</a>, 
        Boston University의 <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="http://www.bu.edu/spark/">Spark! technology incubator</a>, 
        그리고 Signal Culture의 <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="http://signalculture.org/residency.html">residence for researchers and toolmakers</a>의 지원을 받았습니다.
      </p>
    </AboutContainer>      
    </div>
  );
}

export default About;
