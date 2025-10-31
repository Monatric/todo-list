# Development Plan

This is just my personal way of planning things out.

## High level plan

Set up the styles that would be used repeatedly

- [ ] Font style
- [ ] Colors
  - [x] Background
    - [x] Primary bg #fff
    - [x] Secondary bg #f1eaea
    - [x] Tertiary bg #ffd6d7
  - [x] Buttons
    - [x] Primary btn #ff4c50
    - [x] Secondary btn #f1eaea
  - [x] Accent #b3261e
  - [x] Mute #F6F6F6
  - [x] Text
    - [x] Primary txt #1e1e1e
    - [x] Secondary txt #757575
- [x] Title (h1) 32px
- [x] Heading (h2) 24px
- [x] Subheading (h3) 20px
- [x] Base (p) 16px
- [x] Button styles

Set out the static structure

- [ ] Sidebar
- [ ] Header
- [ ] Main content
- [ ] Headings of sidebar and header

Sidebar's static contents

- [ ] All tasks btn
- [ ] My Projects section with + for adding projects

### Build out core functionalities of Todo List

#### Adding projects

Design:

1. When the + btn is clicked, a new `nav__item` under `nav__list` under `project__list` should appear
1. A dialog should appear
   - Title
   - Cancel
   - Confirm

Implementation:
The localStorage would have a key `projectList`, convertable to JSON so items can be nested. This way, we can populate
project lists with the names that was entered for creating a new project. This prevents having to create a new key for
each new project.

Project Item creation is separated on its own file. Project List would use this instead. This keeps the data one way and
the source of truth is clear.

## Nits

- Project item menu doesn't disappear upon clicking outside. It's so difficult to solve
