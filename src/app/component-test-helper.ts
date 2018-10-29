import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

export class ComponentTestHelper<T> {

  constructor(private fixture: ComponentFixture<T>) {}

  el(query: string): DebugElement {
    return this.fixture.debugElement.query(By.css(query));
  }

  $(query: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(query));
  }

  fillInput(query: string, input: string) {
    const element = this.el(query).nativeElement;
    element.value = input;
    element.dispatchEvent(new Event('input'));
    element.dispatchEvent(new Event('keyup'));
    element.dispatchEvent(new Event('keypress'));
  }

  blur(query: string) {
    this.el(query).nativeElement.dispatchEvent(new Event('blur'));
  }

}
