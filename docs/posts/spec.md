---
category:
  - plugin
  - template
tag:
  - base
  - template
archive: true

---

# sourcemod插件模板

## 1. 概述

插件的功能和适用场景。  

## 2. 控制台命令

列出所有注册的命令，包含权限、格式、说明。

| 命令 | 权限 | 格式 | 说明 |
|------|------|------|------|
| `sm_heal` | `无` | `sm_heal <#userid\|name>` | 为目标玩家恢复满生命值。 |
| `sm_god` | `管理员` | `sm_god <target> [1\|0]` | 为指定玩家设置或取消无敌模式。 |

## 3. 控制台变量 (ConVars)

列出所有可调整的变量，包含默认值、取值范围、作用。

| 变量名 | 默认值 | 取值范围 | 说明 |
|--------|--------|----------|------|
| `sm_heal_enabled` | `1` | `0`/`1` | 是否启用治疗功能。 |
| `sm_heal_cooldown` | `5.0` | `0.0` – `60.0` | 治疗命令的冷却时间（秒），仅对普通管理员生效。 |

**修改方法**：  

- 在 `cfg/sourcemod/plugin.xxx.cfg` 中设置，或通过 `sm_cvar` 命令实时调整。

## 4. 用例

展示典型的使用场景，便于快速上手。

**示例 1**：为所有玩家恢复生命  

```sourcepawn
> sm_heal @all
[SM] 已为所有玩家恢复生命值。
```

**示例 2**：临时关闭治疗功能  

```sourcepawn
> sm_cvar sm_heal_enabled 0
[SM] 治疗功能已禁用。
```

## 5. 配置文件说明

插件会在 `cfg/sourcemod/` 下自动生成配置文件，文件名为 `plugin.xxx.cfg`。  
修改后无需重启服务器，执行 `sm plugins reload xxx` 或等待下一张地图即可生效。

## 6. 参考来源

> `Starfelll. 你想的64位l4d2是你想的那样吗？[EB/OL]. (2025-09-20)[2026-03-19]. https://www.bilibili.com/opus/1114678660573429778.`
---
> `[作者]. [标题][EB/OL]. ([发布日期])[引用日期]. [URL].`
---
> `[作者2]. [标题2][EB/OL]. ([发布日期2])[引用日期2]. [URL2].`
