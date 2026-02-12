import React, { useEffect } from "react";
import {
  Sliders,
  Mic,
  Brain,
  User,
  Sparkles,
  UserCircle,
  Wrench,
  BookOpen,
  ShieldCheck,
  Lock,
} from "lucide-react";
import SidebarModal, { SidebarItem } from "./ui/SidebarModal";
import SettingsPage, { SettingsSectionType } from "./SettingsPage";
import { UI_STRINGS } from "../config/i18n";

export type { SettingsSectionType };

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialSection?: SettingsSectionType;
}

export default function SettingsModal({ open, onOpenChange, initialSection }: SettingsModalProps) {
  const sidebarItems: SidebarItem<SettingsSectionType>[] = [
    {
      id: "account",
      label: UI_STRINGS.settings.sidebar.account.label,
      icon: UserCircle,
      description: UI_STRINGS.settings.sidebar.account.desc,
      group: UI_STRINGS.settings.sidebar.groups.profile,
    },
    {
      id: "general",
      label: UI_STRINGS.settings.sidebar.general.label,
      icon: Sliders,
      description: UI_STRINGS.settings.sidebar.general.desc,
      group: UI_STRINGS.settings.sidebar.groups.app,
    },
    {
      id: "transcription",
      label: UI_STRINGS.settings.sidebar.transcription.label,
      icon: Mic,
      description: UI_STRINGS.settings.sidebar.transcription.desc,
      group: UI_STRINGS.settings.sidebar.groups.speech,
    },
    {
      id: "dictionary",
      label: UI_STRINGS.settings.sidebar.dictionary.label,
      icon: BookOpen,
      description: UI_STRINGS.settings.sidebar.dictionary.desc,
      group: UI_STRINGS.settings.sidebar.groups.speech,
    },
    {
      id: "aiModels",
      label: UI_STRINGS.settings.sidebar.aiModels.label,
      icon: Brain,
      description: UI_STRINGS.settings.sidebar.aiModels.desc,
      group: UI_STRINGS.settings.sidebar.groups.intelligence,
    },
    {
      id: "agentConfig",
      label: UI_STRINGS.settings.sidebar.agent.label,
      icon: User,
      description: UI_STRINGS.settings.sidebar.agent.desc,
      group: UI_STRINGS.settings.sidebar.groups.intelligence,
    },
    {
      id: "prompts",
      label: UI_STRINGS.settings.sidebar.prompts.label,
      icon: Sparkles,
      description: UI_STRINGS.settings.sidebar.prompts.desc,
      group: UI_STRINGS.settings.sidebar.groups.intelligence,
    },
    {
      id: "privacy",
      label: UI_STRINGS.settings.sidebar.privacy.label,
      icon: Lock,
      description: UI_STRINGS.settings.sidebar.privacy.desc,
      group: UI_STRINGS.settings.sidebar.groups.system,
    },
    {
      id: "permissions",
      label: UI_STRINGS.settings.sidebar.permissions.label,
      icon: ShieldCheck,
      description: UI_STRINGS.settings.sidebar.permissions.desc,
      group: UI_STRINGS.settings.sidebar.groups.system,
    },
    {
      id: "developer",
      label: UI_STRINGS.settings.sidebar.developer.label,
      icon: Wrench,
      description: UI_STRINGS.settings.sidebar.developer.desc,
      group: UI_STRINGS.settings.sidebar.groups.system,
    },
  ];

  const [activeSection, setActiveSection] = React.useState<SettingsSectionType>("account");

  // Navigate to initial section when modal opens
  useEffect(() => {
    if (open && initialSection) {
      setActiveSection(initialSection);
    }
  }, [open, initialSection]);

  return (
    <SidebarModal<SettingsSectionType>
      open={open}
      onOpenChange={onOpenChange}
      title={UI_STRINGS.settings.modalTitle}
      sidebarItems={sidebarItems}
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      <SettingsPage activeSection={activeSection} />
    </SidebarModal>
  );
}
