import React from 'react';
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import Constants from '@/data/Constants';
import { aquaBlue } from "@codesandbox/sandpack-themes";

function CodeEditor({ codeResp, isReady }: any) {
  const sharedProps = {
    template: "react",
    theme: aquaBlue,
    customSetup: {
      dependencies: {
        ...Constants.DEPENDANCY,
      },
    },
    files: {
      "/App.js": {
        code: `${codeResp}`,
        active: true,
      },
    },
  };

  return (
    <div>
      {isReady ? (
        <Sandpack
  template={"react"}
  theme={aquaBlue}
  options={{
    showNavigator: true,
    showTabs: true,
    editorHeight: 600,
  }}
  customSetup={{
    dependencies: {
      ...Constants.DEPENDANCY,
    },
  }}
  files={{
    "/App.js": {
      code: `${codeResp}`,
      active: true,
    },
  }}
/>
      ) : (
        <SandpackProvider
  template={"react" as const}
  theme={aquaBlue}
  files={{
    "/App.js": {
      code: `${codeResp}`,
      active: true,
    },
  }}
  customSetup={{
    dependencies: {
      ...Constants.DEPENDANCY,
    },
  }}
>
  <SandpackLayout>
    <SandpackCodeEditor showTabs={true} style={{ height: '70vh' }} />
    <SandpackPreview />
  </SandpackLayout>
</SandpackProvider>
      )}
    </div>
  );
}

export default CodeEditor;
