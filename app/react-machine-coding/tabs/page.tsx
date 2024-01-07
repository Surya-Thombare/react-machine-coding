"use client";
import * as React from "react";

interface TabContextProps {
  activeTabValue: string | null;
  setActiveTabValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const tabContext = React.createContext<TabContextProps>({
  activeTabValue: null,
  setActiveTabValue: () => {},
});

interface TabProviderProps {
  children: React.ReactNode;
}

function TabProvider({ children }: TabProviderProps) {
  const [activeTabValue, setActiveTabValue] = React.useState<string | null>(
    "tab-1"
  );

  return (
    <tabContext.Provider value={{ activeTabValue, setActiveTabValue }}>
      {children}
    </tabContext.Provider>
  );
}

interface TabTriggerProps {
  value: string;
  children: React.ReactNode;
}

function TabTrigger({ value, children }: TabTriggerProps) {
  const { activeTabValue, setActiveTabValue } = React.useContext(tabContext);

  const handleSetActiveTabValue = () => {
    setActiveTabValue(value);
  };

  return (
    <button
      onClick={handleSetActiveTabValue}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

function TabContent({ value, children }: TabContentProps) {
  const { activeTabValue } = React.useContext(tabContext);

  if (activeTabValue !== value) {
    return null;
  }

  return <div>{children}</div>;
}

export default function Page() {
  return (
    <section className="m-5">
      <h1>Tabs</h1>
      <TabProvider>
        <div className="m-5 text-orange-500 flex gap-2">
          <TabTrigger value="tab-1">Tab 1</TabTrigger>
          <TabTrigger value="tab-2">Tab 2</TabTrigger>
          <TabTrigger value="tab-3">Tab 3</TabTrigger>
        </div>
        <div className="m-5 text-amber-400">
          <TabContent value="tab-1">Tab Content 1</TabContent>
          <TabContent value="tab-2">Tab Content 2</TabContent>
          <TabContent value="tab-3">Tab Content 3</TabContent>
        </div>
      </TabProvider>
    </section>
  );
}
