let Block = Quill.import('blots/block');
let Icon = Quill.import('ui/icons');

class Section extends Block {

  static icon() {
    return '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><rect fill="#D0D0D0" x="2" y="4" width="8" height="2" rx="1"/><rect fill="#D0D0D0" x="2" y="8" width="14" height="2" rx="1"/><rect class="main" fill="#444" x="2" y="8" width="14" height="2" rx="1"/><rect fill="#D0D0D0" x="2" y="12" width="11" height="2" rx="1"/></g></svg>'
  }
}

Section.blotName = 'section';
Section.tagName = 'H2';
Section.className = 'blog__section';

Icon['section'] = Section.icon();

Quill.register('formats/section', Section);

